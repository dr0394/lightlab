/**
 * Events Section - Upcoming Events with Ticket Links
 * Shockwave Event Calendar
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  imageUrl: string;
  ticketLink: string;
}

export default function EventsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/events/upcoming")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("de-DE", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <section id="events" className="relative py-20 md:py-32 bg-black">
      <div ref={ref} className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-7xl text-white mb-4" style={{
            textShadow: '0 0 30px rgba(255, 107, 0, 0.5)'
          }}>
            UPCOMING EVENTS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FF6B00] to-cyan mx-auto mb-6" />
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            Die nächsten Nächte, die du nicht verpassen darfst. Sichere dir jetzt dein Ticket.
          </p>
        </motion.div>

        {/* Events Grid */}
        {loading ? (
          <div className="text-center text-white/50">Loading events...</div>
        ) : events.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-white/50 mb-4">Aktuell keine Events geplant</p>
            <p className="text-white/30">Stay tuned für Updates!</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative aspect-[3/4] overflow-hidden hover-glow"
              >
                {/* Background Image */}
                <img
                  src={event.imageUrl}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="font-display text-3xl md:text-4xl text-white mb-3">
                    {event.title}
                  </h3>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-cyan text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/70 text-sm">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  {/* Ticket Button */}
                  <a
                    href={event.ticketLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#FF6B00] hover:bg-cyan text-white hover:text-black font-display text-sm tracking-wider transition-all duration-300"
                    style={{
                      boxShadow: '0 0 20px rgba(255, 107, 0, 0.4)'
                    }}
                  >
                    TICKETS SICHERN
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
