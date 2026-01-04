import Link from "next/link";
import { ArrowRight, BarChart3, Cloud, CloudRain, Factory, ShieldCheck, Wind } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-slate-900 text-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-10">
            <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" />
            </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center rounded-full border border-slate-700 bg-slate-800/50 px-3 py-1 text-sm text-slate-300 backdrop-blur-xl mb-6">
            <span className="flex h-2 w-2 rounded-full bg-blue-500 mr-2 animate-pulse"></span>
            New: Polludrone Lite Available
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            Low-Cost Air Quality <br className="hidden md:block"/> Monitoring Solutions
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
            Scalable outdoor air quality monitoring networks measuring PM2.5, PM10, CO, and CO2 with patent-pending technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#products" className="inline-flex h-12 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700">
              Explore Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link href="#contact" className="inline-flex h-12 items-center justify-center rounded-md border border-slate-700 bg-transparent px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-700">
              Request Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Stats / Trust */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-y border-slate-200 py-12">
            <div>
                <div className="text-3xl font-bold text-slate-900">50+</div>
                <div className="text-sm text-slate-500">Major Cities</div>
            </div>
            <div>
                <div className="text-3xl font-bold text-slate-900">1000+</div>
                <div className="text-sm text-slate-500">Installations</div>
            </div>
            <div>
                <div className="text-3xl font-bold text-slate-900">IoT</div>
                <div className="text-sm text-slate-500">Enabled</div>
            </div>
            <div>
                <div className="text-3xl font-bold text-slate-900">AI</div>
                <div className="text-sm text-slate-500">Analytics</div>
            </div>
        </div>
      </section>

      {/* Solutions / Sectors */}
      <section id="sectors" className="container mx-auto px-4">
        <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">Solutions by Sector</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Tackling rapid urbanization and industrial expansion with data-driven environmental insights.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
            <Card 
                icon={<Cloud className="h-10 w-10 text-green-600" />}
                title="Urban Air Quality"
                description="Ensure safe breathing conditions and empower authorities with data-driven insights for infrastructure and policy planning."
            />
            <Card 
                icon={<Factory className="h-10 w-10 text-blue-600" />}
                title="Industrial Monitoring"
                description="Monitor dust and toxic gases to ensure compliance and worker safety in manufacturing plants and construction sites."
            />
            <Card 
                icon={<ShieldCheck className="h-10 w-10 text-orange-600" />}
                title="Odour Monitoring"
                description="Real-time tracking of odour nuisance for landfills and wastewater treatment plants to manage complaints effectively."
            />
        </div>
      </section>

      {/* Products Showcase */}
      <section id="products" className="bg-slate-50 py-16">
         <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">Our Flagship Products</h2>
                    <p className="text-lg text-slate-600">Cost-effective, solar-powered, and retrofit designs for every environmental need.</p>
                </div>
                <Link href="/products" className="hidden md:flex text-blue-600 font-medium hover:text-blue-700 items-center">
                    View All Products <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Product 1 */}
                <ProductCard 
                    tag="Bestseller"
                    name="Polludrone"
                    description="Integrated air quality monitoring system measuring PM1, PM2.5, PM10, CO, CO2, noise, light, and UV."
                    features={['Solar Powered', 'Retrofit Design', 'Patent Pending']}
                />
                 {/* Product 2 */}
                 <ProductCard 
                    tag="Portable"
                    name="Pollusense"
                    description="Portable air quality monitor designed for hot-spot monitoring, indoor surveys, and personal exposure studies."
                    features={['Battery Operated', 'Data Logging', 'Compact']}
                />
                 {/* Product 3 */}
                 <ProductCard 
                    name="Odosense"
                    description="E-nose technology for odour monitoring. Measures H2S, NH3, SO2, CH3SH, and TVOCs."
                    features={['Odour Modeling', 'Real-time Alerts', 'Weather Proof']}
                />
            </div>
            
            <div className="mt-8 text-center md:hidden">
                <Link href="/products" className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center">
                    View All Products <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
            </div>
         </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4">
        <div className="bg-slate-900 rounded-2xl p-8 md:p-16 text-white overflow-hidden relative">
             {/* Abstract Shapes */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

            <div className="grid md:grid-cols-2 gap-12 relative z-10 items-center">
                <div>
                    <h2 className="text-3xl font-bold mb-6">Why Choose Oizom Technology?</h2>
                    <div className="space-y-6">
                        <FeatureItem 
                            title="Patent Pending Technology"
                            desc="Proprietary 'e-breathing' technology for higher data accuracy and longer sensor life."
                        />
                        <FeatureItem 
                            title="Ultimate Durability"
                            desc="Built with high-grade engineering metal and composite polymers to withstand harsh outdoor conditions."
                        />
                         <FeatureItem 
                            title="Retrofit Design"
                            desc="Easy plug-and-play implementation on existing infrastructure like poles and walls."
                        />
                    </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 h-full flex items-center justify-center min-h-[300px]">
                    <div className="text-center">
                        <BarChart3 className="h-16 w-16 text-blue-400 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Actionable Insights</h3>
                        <p className="text-slate-300 text-sm">Visualize data, generate reports, and receive alerts via our Environmental AI platform.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="container mx-auto px-4 text-center py-12">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">Ready to implement Environmental IoT?</h2>
        <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">Join smart cities and industries worldwide in making data-driven environmental decisions.</p>
        <div className="flex justify-center gap-4">
             <button className="inline-flex h-12 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700">
              Get a Quote
            </button>
        </div>
      </section>

    </div>
  );
}

// Simple Components for this page
function Card({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <div className="group rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-blue-200">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-slate-50 group-hover:bg-blue-50 transition-colors">
                {icon}
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
            <p className="text-slate-500 leading-relaxed">{description}</p>
        </div>
    )
}

function ProductCard({ name, description, features, tag }: { name: string, description: string, features: string[], tag?: string }) {
    return (
        <div className="flex flex-col rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm transition-all hover:shadow-lg">
            <div className="h-48 bg-slate-100 flex items-center justify-center relative">
                {tag && <span className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">{tag}</span>}
                <div className="w-24 h-24 bg-slate-300 rounded-md flex items-center justify-center text-slate-500 text-sm">Product Img</div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{name}</h3>
                <p className="text-sm text-slate-500 mb-4 flex-1">{description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                    {features.map(f => (
                        <span key={f} className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-800">
                            {f}
                        </span>
                    ))}
                </div>
                <button className="w-full inline-flex h-10 items-center justify-center rounded-md border border-slate-200 bg-white px-4 text-sm font-medium text-slate-900 transition-colors hover:bg-slate-50 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950">
                    View Specs
                </button>
            </div>
        </div>
    )
}

function FeatureItem({ title, desc }: { title: string, desc: string }) {
    return (
        <div className="flex gap-4">
            <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
            </div>
            <div>
                <h4 className="font-semibold text-white">{title}</h4>
                <p className="text-sm text-slate-300">{desc}</p>
            </div>
        </div>
    )
}
