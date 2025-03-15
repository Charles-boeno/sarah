import { MapPin, Clock, Phone } from "lucide-react"

export default function LocationSection() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container px-4 md:px-6">
        <h2 className="mb-8 md:mb-12 text-center text-2xl md:text-3xl font-bold text-gray-800">Localização</h2>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-lg shadow-md order-2 md:order-1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3636.9776069217394!2d-53.74384992548566!3d-24.32520077830958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f3852998d6db3d%3A0x8c9b8c14d4e7a906!2sR.%20Borges%20de%20Medeiros%2C%201820%20-%20Centro%2C%20Toledo%20-%20PR%2C%2085900-000!5e0!3m2!1spt-BR!2sbr!4v1710356789012!5m2!1spt-BR!2sbr"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Sarah Esteticista"
              className="w-full md:h-[450px]"
            ></iframe>
          </div>

          <div className="flex flex-col justify-center order-1 md:order-2">
            <div className="space-y-6 md:space-y-8">
              <div>
                <h3 className="mb-2 md:mb-4 text-xl md:text-2xl font-semibold text-gray-800">Sarah Esteticista</h3>
                <p className="text-sm md:text-base text-gray-600">
                  Oferecemos um ambiente acolhedor e tranquilo para todos os nossos tratamentos estéticos, com
                  equipamentos modernos e produtos de alta qualidade.
                </p>
              </div>

              <div className="space-y-3 md:space-y-4">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="mt-1 rounded-full bg-pink-100 p-1.5 md:p-2 text-pink-500">
                    <MapPin className="h-4 w-4 md:h-5 md:w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 text-sm md:text-base">Endereço</h4>
                    <p className="text-xs md:text-sm text-gray-600">
                      R. Borges de Medeiros, 1820
                      <br />
                      Centro - Toledo/PR
                      <br />
                      CEP: 85900-000
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <div className="mt-1 rounded-full bg-pink-100 p-1.5 md:p-2 text-pink-500">
                    <Clock className="h-4 w-4 md:h-5 md:w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 text-sm md:text-base">Horário de Funcionamento</h4>
                    <p className="text-xs md:text-sm text-gray-600">
                      Segunda a Sexta: 9h às 19h
                      <br />
                      Sábado: 9h às 16h
                      <br />
                      Domingo: Fechado
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <div className="mt-1 rounded-full bg-pink-100 p-1.5 md:p-2 text-pink-500">
                    <Phone className="h-4 w-4 md:h-5 md:w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 text-sm md:text-base">Contato</h4>
                    <p className="text-xs md:text-sm text-gray-600">
                      WhatsApp: (45) 99850-2400
                      <br />
                      Email: contato@sarahesteticista.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

