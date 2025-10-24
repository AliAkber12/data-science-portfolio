import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Globe, Award, BookOpen, Send } from "lucide-react";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-emerald-950 text-gray-100 font-sans">
      {/* Header Section */}
      <section className="text-center py-24 bg-gradient-to-r from-black via-emerald-900 to-green-700 text-yellow-400 shadow-xl border-b border-yellow-500">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight drop-shadow-lg"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Ali Akber
        </motion.h1>
        <p className="text-lg md:text-2xl mb-8 font-light text-emerald-100">Data Scientist | Karachi, Pakistan</p>
        <div className="flex justify-center gap-5 flex-wrap">
          <a href="https://www.linkedin.com/in/ali-akber-chandio-480344329/" target="_blank" rel="noopener noreferrer">
            <Button variant="secondary" className="gap-2 bg-yellow-500 text-black hover:bg-yellow-400 font-semibold"><Linkedin size={18}/>LinkedIn</Button>
          </a>
          <a href="https://github.com/AliAkber12" target="_blank" rel="noopener noreferrer">
            <Button variant="secondary" className="gap-2 bg-yellow-500 text-black hover:bg-yellow-400 font-semibold"><Github size={18}/>GitHub</Button>
          </a>
          <a href="https://www.kaggle.com/aliakber12" target="_blank" rel="noopener noreferrer">
            <Button variant="secondary" className="gap-2 bg-yellow-500 text-black hover:bg-yellow-400 font-semibold"><Globe size={18}/>Kaggle</Button>
          </a>
          <a href="mailto:aliakberhyder@gmail.com">
            <Button variant="secondary" className="gap-2 bg-yellow-500 text-black hover:bg-yellow-400 font-semibold"><Mail size={18}/>Email</Button>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6 border-b-4 border-yellow-500 inline-block pb-2 text-yellow-400">About Me</h2>
        <p className="text-lg leading-relaxed text-gray-200">
          I am <strong className="text-yellow-400">Ali Akber</strong>, a results-driven <strong className="text-green-400">Data Scientist</strong> from Karachi, Pakistan.
          I specialize in <strong>machine learning, predictive analytics, and AI-driven automation</strong>. My work blends analytical precision with creativity to uncover insights, build scalable models, and deliver impactful business intelligence.
        </p>
      </section>

      {/* Skills Section */}
      <section className="max-w-5xl mx-auto px-6 py-20 bg-gradient-to-r from-gray-900 to-black rounded-3xl shadow-xl border-l-4 border-green-600">
        <h2 className="text-3xl font-bold mb-6 text-yellow-400 border-b-2 border-green-500 pb-2">Technical Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-lg font-medium text-gray-200">
          {["Python","SQL","Machine Learning","Power BI","Tableau","Scikit-learn","TensorFlow","PyTorch","AWS","Flask","Streamlit","Data Visualization"].map((skill,i)=>(
            <span key={i} className="bg-gradient-to-r from-green-800 to-emerald-700 text-yellow-300 px-3 py-2 rounded-lg shadow hover:shadow-yellow-500/30 transition">{skill}</span>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-8 text-yellow-400 border-b-4 border-green-500 inline-block pb-2">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="shadow-lg hover:shadow-yellow-500/40 transition rounded-2xl border-t-4 border-yellow-500 bg-gray-900">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2 text-yellow-400">Predictive Analytics for Business Insights</h3>
              <p className="mb-4 text-gray-300">Developed predictive models using Python and Scikit-learn to forecast business KPIs and improve decision-making.</p>
              <a href="https://github.com/AliAkber12" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black">View on GitHub</Button>
              </a>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-yellow-500/40 transition rounded-2xl border-t-4 border-yellow-500 bg-gray-900">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2 text-yellow-400">Machine Learning Model Deployment</h3>
              <p className="mb-4 text-gray-300">Containerized and deployed ML models using Flask, Streamlit, and AWS for real-time AI services.</p>
              <a href="https://github.com/AliAkber12" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black">View on GitHub</Button>
              </a>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-yellow-500/40 transition rounded-2xl border-t-4 border-yellow-500 bg-gray-900">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2 text-yellow-400">Data Visualization Dashboards</h3>
              <p className="mb-4 text-gray-300">Designed dashboards with Tableau and Plotly for KPI tracking and executive-level visual insights.</p>
              <a href="https://www.kaggle.com/aliakber12" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black">View on Kaggle</Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Form */}
      <section className="max-w-3xl mx-auto px-6 py-20 bg-gradient-to-br from-gray-900 to-black rounded-3xl shadow-xl border-l-4 border-yellow-500">
        <h2 className="text-3xl font-bold mb-6 text-yellow-400">Contact Me</h2>
        <form className="grid gap-4">
          <input type="text" placeholder="Your Name" className="border border-yellow-500 bg-gray-800 text-gray-100 rounded-lg p-3 focus:ring-2 focus:ring-green-500" />
          <input type="email" placeholder="Your Email" className="border border-yellow-500 bg-gray-800 text-gray-100 rounded-lg p-3 focus:ring-2 focus:ring-green-500" />
          <textarea placeholder="Your Message" rows="5" className="border border-yellow-500 bg-gray-800 text-gray-100 rounded-lg p-3 focus:ring-2 focus:ring-green-500"></textarea>
          <Button className="w-full bg-gradient-to-r from-yellow-500 to-green-600 text-black font-semibold hover:from-yellow-400 hover:to-green-500 gap-2"><Send size={18}/>Send Message</Button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-black via-gray-900 to-emerald-900 py-10 text-center text-yellow-400 mt-16 border-t border-yellow-600">
        <p className="text-sm mb-4">© {new Date().getFullYear()} Ali Akber — All rights reserved.</p>
        <div className="flex justify-center gap-6">
          <a href="https://www.linkedin.com/in/ali-akber-chandio-480344329/" target="_blank" rel="noopener noreferrer"><Linkedin size={22}/></a>
          <a href="https://github.com/AliAkber12" target="_blank" rel="noopener noreferrer"><Github size={22}/></a>
          <a href="https://www.kaggle.com/aliakber12" target="_blank" rel="noopener noreferrer"><Globe size={22}/></a>
          <a href="mailto:aliakberhyder@gmail.com"><Mail size={22}/></a>
        </div>
      </footer>
    </main>
  );
}
