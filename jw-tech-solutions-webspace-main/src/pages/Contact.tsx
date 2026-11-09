import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { motion, type Variants, cubicBezier } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";

import Navbar from "@/components/Navbar";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/i18n/LanguageContext";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const ease = cubicBezier(0.2, 0.8, 0.2, 1);

const container: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.08, duration: 0.7, ease },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const PosterBackground = () => (
  <>
    <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_20%_20%,hsl(var(--primary)/0.30),transparent_55%),radial-gradient(900px_circle_at_85%_25%,hsl(var(--primary)/0.18),transparent_60%),linear-gradient(135deg,hsl(var(--background))_0%,hsl(0_0%_3%)_58%,hsl(var(--background))_100%)]" />
    <div className="absolute inset-0 opacity-[0.10] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:28px_28px]" />
    <div className="absolute inset-0 bg-black/20" />
  </>
);

const glassCard =
  "border border-white/12 bg-white/5 backdrop-blur-md shadow-2xl";

const CONTACT_ICONS = [
  <Mail key="mail" className="h-6 w-6 text-primary" />,
  <Phone key="phone" className="h-6 w-6 text-primary" />,
  <MapPin key="map" className="h-6 w-6 text-primary" />,
  <Clock key="clock" className="h-6 w-6 text-primary" />,
];

const Contact = () => {
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const { t } = useLanguage();
  const c = t.contact;

  const [isSubmitting, setIsSubmitting] = useState(false);
  // `service` guarda el id de la opción (no el texto) para que la selección
  // se conserve y se traduzca al cambiar de idioma.
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  // Si llegamos desde una tarjeta de Servicios: ?servicio=<id de categoría>
  // (también acepta un texto libre, por si hay enlaces antiguos).
  const serviceParam = searchParams.get("servicio");
  const cameFromServiceCard = Boolean(serviceParam);
  const cardServiceLabel =
    t.servicesCatalog.find((s) => s.category === serviceParam)?.title ?? serviceParam ?? "";

  // Mensaje precargado: se actualiza al cambiar de idioma, pero nunca pisa
  // lo que el usuario ya haya escrito/editado.
  const lastPrefill = useRef("");
  useEffect(() => {
    if (!cameFromServiceCard) return;
    const next = c.prefillMessage(cardServiceLabel);
    // Capturar el valor anterior ANTES de actualizar el ref: React ejecuta la
    // función de setFormData más tarde, cuando el ref ya tendría el valor nuevo.
    const previousPrefill = lastPrefill.current;
    lastPrefill.current = next;
    setFormData((prev) =>
      prev.message === previousPrefill ? { ...prev, message: next } : prev
    );
  }, [cameFromServiceCard, cardServiceLabel, c]);

  const contactInfo = c.info.map((info, i) => ({ ...info, icon: CONTACT_ICONS[i] }));
  const services = c.serviceOptions;

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const selectedServiceLabel =
      services.find((s) => s.id === formData.service)?.label ?? formData.service;

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      service: cameFromServiceCard ? cardServiceLabel : selectedServiceLabel,
      message: formData.message,
    };

    try {
      await emailjs.send(
        "service_fd9i4il", // Service ID
        "template_60v84au", // Template ID
        templateParams,
        "MBKs0bSMC6hGCJ4Xi" // Public key
      );

      toast({
        title: c.toastSuccessTitle,
        description: c.toastSuccessDescription,
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: c.toastErrorTitle,
        description: c.toastErrorDescription,
      });
      console.error("EmailJS error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* HERO (mismo estilo que Home/About + imagen tipo “laptop card”) */}
      <section className="relative overflow-hidden">
        <PosterBackground />

        <div className="relative mx-auto max-w-7xl px-6 py-14 md:py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div variants={container} initial="hidden" animate="show">
              <motion.div
                variants={item}
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-2 text-white/70"
              >
                <span className="text-primary">{"</>"}</span>
                <span className="tracking-[0.25em] uppercase text-xs">
                  {c.badge}
                </span>
              </motion.div>

              <motion.h1
                variants={item}
                className="mt-5 text-4xl md:text-6xl font-extrabold leading-[1.05] text-white"
              >
                {c.heroTitle}
              </motion.h1>

              <motion.p
                variants={item}
                className="mt-4 text-base md:text-lg text-white/75 leading-relaxed"
              >
                {c.heroSubtitle}
              </motion.p>

              <motion.div variants={item} className="mt-7 flex flex-wrap gap-3">
                <a href="#form">
                  <Button className="bg-primary hover:bg-primary/90 text-white">
                    {c.sendMessage}
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </a>

                <a
                  href="https://calendly.com/jwtechdr/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="border-white/20 bg-white/5 text-white hover:bg-white/10"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    {c.scheduleCall}
                  </Button>
                </a>
              </motion.div>
            </motion.div>

            {/* Laptop Card (mismo tamaño/ratio tipo index: 16/9) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease }}
              className="relative lg:justify-self-end lg:max-w-[640px] w-full"
            >
              <div className="absolute -inset-6 rounded-[28px] bg-primary/25 blur-3xl" />

              <div className="relative rounded-[28px] border border-white/12 bg-white/5 backdrop-blur-md shadow-2xl overflow-hidden">
                <div className="flex items-center justify-between px-5 py-3 border-b border-white/10">
                  <p className="text-xs tracking-[0.22em] uppercase text-white/70">
                    JW TECH SOLUTIONS
                  </p>
                  <p className="text-xs text-white/60">jwtechssolutions.com</p>
                </div>

                <div className="aspect-[16/9] w-full bg-black/20">
                  {/* Usa una imagen 16:9 (ej: 1920x1080 o 1280x720) */}
                  <img
                    src="/home/contactospost.jpg"
                    alt={c.posterAlt}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="px-5 py-4 border-t border-white/10">
                  <p className="text-sm text-white/75">
                    {c.posterFooter}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* INFO + FORM (sin fondo blanco, estilo glass) */}
      <section className="relative overflow-hidden py-14 md:py-20">
        <PosterBackground />

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Cards de info */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {contactInfo.map((info) => (
              <motion.div key={info.title} variants={item}>
                <Card className={`${glassCard} text-center h-full`}>
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">{info.icon}</div>
                    <h3 className="font-bold text-white mb-2">{info.title}</h3>
                    <p className="text-white/90 font-medium mb-1">
                      {info.value}
                    </p>
                    <p className="text-sm text-white/60">{info.subtitle}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-10 grid lg:grid-cols-2 gap-10 items-start">
            {/* FORM */}
            <motion.div
              id="form"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div variants={item}>
                <Card className={glassCard}>
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-white">
                      {c.form.title}
                    </CardTitle>
                    <p className="text-white/60">
                      {c.form.subtitle}
                    </p>
                  </CardHeader>

                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label className="text-white/80" htmlFor="name">
                            {c.form.name}
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            placeholder={c.form.namePlaceholder}
                            className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-white/80" htmlFor="email">
                            {c.form.email}
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            placeholder={c.form.emailPlaceholder}
                            className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label className="text-white/80" htmlFor="phone">
                            {c.form.phone}
                          </Label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+1 (849)-381-9937"
                            className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-white/80" htmlFor="company">
                            {c.form.company}
                          </Label>
                          <Input
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder={c.form.companyPlaceholder}
                            className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label className="text-white/80" htmlFor="service">
                          {c.form.service}
                        </Label>

                        {cameFromServiceCard ? (
                          <Input
                            id="service"
                            name="service"
                            value={cardServiceLabel}
                            readOnly
                            className="bg-white/5 border-white/10 text-white/80 cursor-not-allowed"
                          />
                        ) : (
                          <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleInputChange}
                            required
                            className="w-full px-3 py-2 rounded-md bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                          >
                            <option value="" className="text-black">
                              {c.form.servicePlaceholder}
                            </option>
                            {services.map((s) => (
                              <option key={s.id} value={s.id} className="text-black">
                                {s.label}
                              </option>
                            ))}
                          </select>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label className="text-white/80" htmlFor="message">
                          {c.form.message}
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={5}
                          placeholder={c.form.messagePlaceholder}
                          className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-primary hover:bg-primary/90 text-white"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          c.form.submitting
                        ) : (
                          <>
                            {c.form.submit}
                            <Send className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* MAP + WHY US */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease }}
              >
                <Card className={`${glassCard} overflow-hidden`}>
                  <CardContent className="p-0">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.572875069226!2d-69.98568795247235!3d18.457692433788925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ea56178c719da17%3A0xcb4de30651a6d873!2sPlaza%20Paseo%2027!5e0!3m2!1ses-419!2sdo!4v1753515472942!5m2!1ses-419!2sdo"
                      width="100%"
                      height="420"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full"
                    />
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease }}
              >
                <Card className={glassCard}>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-white">
                      {c.whyTitle}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {c.whyItems.map((text) => (
                        <li key={text} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                          <span className="text-white/70">{text}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex gap-3 flex-wrap">
                      <a
                        href="mailto:jwtechdr@gmail.com"
                        className="inline-flex"
                      >
                        <Button
                          variant="outline"
                          className="border-white/20 bg-white/5 text-white hover:bg-white/10"
                        >
                          <Mail className="mr-2 h-4 w-4" />
                          {c.writeEmail}
                        </Button>
                      </a>

                      <a
                        href="https://calendly.com/jwtechdr/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex"
                      >
                        <Button className="bg-primary hover:bg-primary/90 text-white">
                          <Phone className="mr-2 h-4 w-4" />
                          {c.scheduleCall}
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL (opcional, ya tienes CTA arriba, pero lo dejo elegante) */}
      <section className="py-14 md:py-16 bg-background">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-3xl border border-border bg-muted/30 p-8 md:p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              {c.finalTitle}
            </h2>
            <p className="mt-2 text-muted-foreground">
              {c.finalSubtitle}
            </p>

            <div className="mt-6 flex justify-center">
              <a
                href="https://calendly.com/jwtechdr/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Phone className="mr-2 h-5 w-5" />
                  {c.finalCta}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
