"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Upload, Lightbulb, ArrowRight, FileText, Youtube, FileType, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import Typewriter from 'typewriter-effect';

export function InputSection() {
  const [characterCount, setCharacterCount] = useState(0);
  const maxCharacters = 2500;

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    setCharacterCount(text.length);
  };

  return (
    <section className="relative bg-black py-24">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#3e3e3e,#000000)]" />
      </div>

      <div className="container relative mx-auto px-4">
        {/* Language Support Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center mb-8"
        >
          <a
            href="#"
            className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
          >
            <span className="text-white">🌐 Casetomonial Support 100+ Languages</span>
            <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            <div className="bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
              <Typewriter
                options={{
                  strings: [
                    'Professional AI',
                    'Beautiful Slides',
                    'Perfect Presentations',
                    'Instant Results'
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  delay: 80,
                  cursor: '|'
                }}
              />
            </div>
            <span className="block mt-2">Presentations in Seconds</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg mb-12"
          >
            Just Enter Topic, Youtube URL, PDF, or Text to get a beautiful PPT in seconds. Use
            the bulb for AI suggestions.
          </motion.p>

          {/* Input Area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <div className="relative">
              <p className="text-left text-sm text-gray-500 mb-2">
                character count: {characterCount}/{maxCharacters} (we can fetch data from google)
              </p>
              <Textarea
                placeholder="Enter Topic, Youtube URL, PDF, or Text to get a PPT in seconds. use the bulb for suggestions."
                className="min-h-[200px] bg-white/5 border-dashed border-2 border-white/20 rounded-xl text-white placeholder:text-gray-500"
                onChange={handleTextChange}
              />
            </div>

            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Button variant="outline" className="bg-white/5 border-white/20 text-white hover:bg-white/10">
                  <Upload className="w-4 h-4 mr-2" />
                  Upload File
                </Button>
                <p className="text-sm text-gray-500">
                  upload pdf, docx, png, mp4, pptx, mp3
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  className="bg-white/5 border-white/20 text-white hover:bg-white/10"
                >
                  <Lightbulb className="w-4 h-4" />
                </Button>
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8">
                  Generate Instant PPT
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>

            <p className="text-sm text-gray-500 text-right">less than 2 min</p>
          </motion.div>

          {/* Icons Flow Diagram */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-24 flex items-center justify-center gap-8"
          >
            <div className="flex items-center gap-12">
              {/* Input Types */}
              <div className="space-y-4">
                <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center">
                  <Youtube className="w-6 h-6 text-white" />
                </div>
                <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center">
                  <FileType className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Arrow */}
              <div className="text-white text-4xl">→</div>

              {/* Casetomonial Logo */}
              <div className="w-20 h-20 bg-white/5 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">Casetomonial</span>
              </div>

              {/* Arrow */}
              <div className="text-white text-4xl">→</div>

              {/* Output Types */}
              <div className="space-y-4">
                <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                  <img src="/powerpoint-icon.png" alt="PowerPoint" className="w-6 h-6" />
                </div>
                <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                  <img src="/google-slides-icon.png" alt="Google Slides" className="w-6 h-6" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}