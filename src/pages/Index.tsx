import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://cdn.poehali.dev/projects/59f0e847-15e5-4414-805f-85a9eebb350f/files/fecc3eea-7ef3-4459-bc8f-ede24942b6d3.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.4)'
          }}
        />
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 animate-fade-in">
            Колокольцев Кирилл
          </h1>
          <div className="w-24 h-1 bg-secondary mx-auto animate-scale-in" />
        </div>
      </section>

      <section className="py-24 px-4 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">
          Контакты
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 hover:shadow-lg transition-all duration-300 hover-scale">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <Icon name="Mail" className="text-secondary" size={24} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-semibold mb-2 text-primary">Email</h3>
                <a 
                  href="mailto:kirillkolokol1303@gmail.com"
                  className="text-muted-foreground hover:text-secondary transition-colors break-all"
                >
                  kirillkolokol1303@gmail.com
                </a>
              </div>
            </div>
          </Card>

          <Card className="p-8 hover:shadow-lg transition-all duration-300 hover-scale">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <Icon name="Users" className="text-secondary" size={24} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-semibold mb-2 text-primary">Социальная сеть</h3>
                <a 
                  href="https://vk.com/kiirilkeogog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-secondary transition-colors inline-flex items-center gap-2"
                >
                  ВКонтакте
                  <Icon name="ExternalLink" size={16} />
                </a>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
