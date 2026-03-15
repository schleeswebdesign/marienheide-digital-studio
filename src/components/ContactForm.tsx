import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle } from "lucide-react";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="card-base text-center py-16">
        <CheckCircle size={48} className="mx-auto text-primary mb-4" />
        <h3 className="text-2xl mb-2">Vielen Dank!</h3>
        <p className="text-muted-foreground">Wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card-base space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium text-secondary mb-1.5 block">Name *</label>
          <Input placeholder="Max Mustermann" required />
        </div>
        <div>
          <label className="text-sm font-medium text-secondary mb-1.5 block">Firma</label>
          <Input placeholder="Firmenname" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium text-secondary mb-1.5 block">E-Mail *</label>
          <Input type="email" placeholder="max@beispiel.de" required />
        </div>
        <div>
          <label className="text-sm font-medium text-secondary mb-1.5 block">Telefon (optional)</label>
          <Input type="tel" placeholder="+49 123 456 789" />
        </div>
      </div>
      <div>
        <label className="text-sm font-medium text-secondary mb-1.5 block">Nachricht *</label>
        <Textarea placeholder="Erzählen Sie uns von Ihrem Projekt..." rows={4} required />
      </div>
      <Button type="submit" size="lg" className="w-full sm:w-auto">
        <Send size={16} />
        Nachricht senden
      </Button>
    </form>
  );
};

export default ContactForm;
