import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon, CreditCard } from "lucide-react";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";

const Booking = () => {
  const [date, setDate] = useState<Date>();
  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);
  const { toast } = useToast();

  const seats = Array.from({ length: 40 }, (_, i) => i + 1);
  const occupiedSeats = [5, 8, 12, 15, 23, 28, 35];

  const toggleSeat = (seatNumber: number) => {
    if (occupiedSeats.includes(seatNumber)) return;

    setSelectedSeats((prev) =>
      prev.includes(seatNumber)
        ? prev.filter((s) => s !== seatNumber)
        : [...prev, seatNumber]
    );
  };

  const handleBooking = () => {
    toast({
      title: "Booking Confirmed!",
      description: `Successfully booked ${selectedSeats.length} seat(s).`,
    });
  };

  const seatPrice = 25;
  const totalPrice = selectedSeats.length * seatPrice;

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Ticket Booking</h1>
          <p className="text-muted-foreground">
            Select your seats and complete your booking.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Booking Form */}
          <Card className="p-6 lg:col-span-2">
            <h2 className="text-xl font-semibold mb-6">Booking Details</h2>
            <div className="space-y-4 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="from">From</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select departure" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Delhi">Delhi</SelectItem>
                      <SelectItem value="jaipur">Jaipur</SelectItem>
                      <SelectItem value="Agra">Agra</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="to">To</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select destination" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Bhopal">Bhopal</SelectItem>
                      <SelectItem value="Indore">Indore</SelectItem>
                      <SelectItem value="Mount Abu">Mount Abu</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Journey Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            <h3 className="text-lg font-semibold mb-4">Select Seats</h3>
            <div className="mb-4 flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded border-2 border-border bg-background"></div>
                <span>Available</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded bg-primary"></div>
                <span>Selected</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded bg-muted border-2 border-muted-foreground"></div>
                <span>Occupied</span>
              </div>
            </div>

            <div className="grid grid-cols-8 gap-3 p-6 bg-muted rounded-lg">
              {seats.map((seat) => {
                const isOccupied = occupiedSeats.includes(seat);
                const isSelected = selectedSeats.includes(seat);

                return (
                  <button
                    key={seat}
                    onClick={() => toggleSeat(seat)}
                    disabled={isOccupied}
                    className={`
                      aspect-square rounded text-sm font-medium transition-all
                      ${
                        isOccupied
                          ? "bg-muted border-2 border-muted-foreground cursor-not-allowed"
                          : ""
                      }
                      ${
                        isSelected
                          ? "bg-primary text-primary-foreground shadow-glow"
                          : ""
                      }
                      ${
                        !isOccupied && !isSelected
                          ? "border-2 border-border bg-background hover:border-primary"
                          : ""
                      }
                    `}
                  >
                    {seat}
                  </button>
                );
              })}
            </div>
          </Card>

          {/* Booking Summary */}
          <Card className="p-6 h-fit">
            <h2 className="text-xl font-semibold mb-6">Booking Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Selected Seats:</span>
                <span className="font-medium">
                  {selectedSeats.length || "-"}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Seat Numbers:</span>
                <span className="font-medium">
                  {selectedSeats.join(", ") || "-"}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Price per seat:</span>
                <span className="font-medium">{seatPrice}</span>
              </div>
              <div className="border-t border-border pt-4 flex justify-between">
                <span className="font-semibold">Total:</span>
                <span className="text-2xl font-bold text-primary">
                  {totalPrice}
                </span>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <Button
                className="w-full shadow-glow"
                disabled={selectedSeats.length === 0}
                onClick={handleBooking}
              >
                <CreditCard className="mr-2 h-4 w-4" />
                Proceed to Payment
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                Secure payment powered by Stripe
              </p>
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Booking;
