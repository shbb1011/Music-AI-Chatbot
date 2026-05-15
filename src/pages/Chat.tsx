import { Paperclip, Play, Send, AudioLines } from "lucide-react";
import { useState } from "react";

export default function Chat() {
  const [inputText, setInputText] = useState("");

  return (
    <>
      <main className="flex-grow pt-[80px] pb-[100px] md:pb-[140px] flex flex-col items-center px-margin-mobile md:px-margin-desktop w-full max-w-4xl mx-auto overflow-y-auto">
        <div className="w-full text-center py-xl border-b border-hairline mb-lg">
          <h1 className="font-display-md text-display-md text-body-strong mb-sm">Your Personal Music Curator</h1>
          <p className="font-body-md text-body-md text-muted max-w-2xl mx-auto">Ask Aria for mood-based playlists, deep cuts from your favorite artists, or help discovering new genres.</p>
        </div>
        
        <div className="w-full flex flex-col gap-lg pb-section">
          <div className="flex flex-col items-end w-full">
            <div className="bg-surface-cream-strong text-body-strong px-lg py-sm rounded-xl rounded-tr-sm max-w-[85%] md:max-w-[70%]">
              <p className="font-body-md text-body-md">I'm looking for something instrumental and upbeat to listen to while working. Maybe some modern jazz or lo-fi beats, but nothing too sleepy.</p>
            </div>
            <span className="font-caption text-caption text-muted mt-xxs">10:42 AM</span>
          </div>

          <div className="flex flex-col items-start w-full">
            <div className="flex items-start gap-md max-w-[95%] md:max-w-[85%]">
              <div className="w-10 h-10 rounded-full bg-surface-dark flex items-center justify-center shrink-0">
                <AudioLines className="text-primary-fixed w-5 h-5" />
              </div>
              <div className="flex flex-col gap-sm w-full">
                <div className="bg-surface-card text-body px-lg py-md rounded-xl rounded-tl-sm border border-hairline w-full">
                  <p className="font-body-md text-body-md mb-md">I have just the right mix for focused energy. Here are a few recommendations that blend modern jazz elements with upbeat instrumental grooves to keep you productive without distraction.</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-md mt-md">
                    <div className="bg-canvas border border-hairline rounded-lg p-sm flex items-center gap-sm hover:border-primary transition-colors cursor-pointer group">
                      <div className="w-16 h-16 rounded overflow-hidden shrink-0 bg-surface-dark">
                        <img
                          alt="Album cover"
                          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVwtj9Hn-7FIwpZb8cFBy8Ro_MvFMQ4UL5ibuimPzbsHaVz2CcrTfzmP1QvnxGDb2FlS91_SzAknFBmP19GlHLXtiMvjWOEr72nWxUdRvTbxqNIvAnVdRQS017TmQBh9rZtczS1vBFzxqVGqK14mzOBjoxYh34y2CUTpow7D8e2gF1VzKCZKj4THugTJTpWZikmES0uVGEpI1guEgHbKJ6U1H5I1gzqMvM4otCEng5wBh-rpHjTDtGq1zoMpVxUFX0MeRozujhU1E"
                        />
                      </div>
                      <div className="flex flex-col min-w-0">
                        <h4 className="font-title-sm text-title-sm text-body-strong truncate">Kinetic Flow</h4>
                        <p className="font-body-sm text-body-sm text-muted truncate">The Rhythm Collective</p>
                      </div>
                      <button className="ml-auto w-8 h-8 rounded-full bg-surface-soft flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-colors shrink-0">
                        <Play className="w-4 h-4 fill-current" />
                      </button>
                    </div>

                    <div className="bg-canvas border border-hairline rounded-lg p-sm flex items-center gap-sm hover:border-primary transition-colors cursor-pointer group">
                      <div className="w-16 h-16 rounded overflow-hidden shrink-0 bg-surface-dark">
                        <img
                          alt="Album cover 2"
                          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCq-u2pG1631MBqSJXkAKlyWjcdFj8pQ1__NzQcnWdfHP3IZkjzI_fSL23_ckDV94jXT3S5y4h7LIejJ7vNi_7DCRwBPIea2I4VHt99YIzYJ-r4P9X-19tikdHZe19H0lGLRs66MWlIFptXwwa6gMNOGKPuV3PL5rYcpp6jE_QRadSXncUOXvlBF6iyHhW0Yx2Gvyq9utkV5qyjnin8MDfKmCufG7KYby80YFjhEGMrmGnKzBgFqGgyJjRtJdoYWBDLvxAcguC1upc"
                        />
                      </div>
                      <div className="flex flex-col min-w-0">
                        <h4 className="font-title-sm text-title-sm text-body-strong truncate">Coffee &amp; Code</h4>
                        <p className="font-body-sm text-body-sm text-muted truncate">Syntax Error Beats</p>
                      </div>
                      <button className="ml-auto w-8 h-8 rounded-full bg-surface-soft flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-colors shrink-0">
                        <Play className="w-4 h-4 fill-current" />
                      </button>
                    </div>
                  </div>
                </div>
                <span className="font-caption text-caption text-muted ml-xs">Aria • 10:43 AM</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-end w-full">
            <div className="bg-surface-cream-strong text-body-strong px-lg py-sm rounded-xl rounded-tr-sm max-w-[85%] md:max-w-[70%]">
              <p className="font-body-md text-body-md">These are great. 'Kinetic Flow' is exactly the vibe. Can you build a 2-hour playlist based on that track?</p>
            </div>
            <span className="font-caption text-caption text-muted mt-xxs">10:45 AM</span>
          </div>

          <div className="flex flex-col items-start w-full">
            <div className="flex items-start gap-md">
              <div className="w-10 h-10 rounded-full bg-surface-dark flex items-center justify-center shrink-0">
                <AudioLines className="text-primary-fixed w-5 h-5" />
              </div>
              <div className="bg-surface-card px-md py-sm rounded-xl rounded-tl-sm border border-hairline flex items-center gap-xs h-10">
                <div className="w-2 h-2 rounded-full bg-muted animate-pulse"></div>
                <div className="w-2 h-2 rounded-full bg-muted animate-pulse delay-75"></div>
                <div className="w-2 h-2 rounded-full bg-muted animate-pulse delay-150"></div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 w-full bg-canvas/90 backdrop-blur-md border-t border-hairline py-md px-margin-mobile md:px-margin-desktop z-40 mb-[80px] md:mb-[100px]">
        <div className="max-w-4xl mx-auto flex items-end gap-sm bg-surface-card border border-hairline rounded-lg p-xs focus-within:border-primary transition-colors shadow-sm">
          <button className="p-sm text-muted hover:text-primary transition-colors shrink-0 flex items-center justify-center">
            <Paperclip className="w-5 h-5" />
          </button>
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="w-full bg-transparent border-none focus:ring-0 resize-none font-body-md text-body-md text-body placeholder:text-muted py-sm min-h-[44px] max-h-[120px] overflow-y-auto outline-none"
            placeholder="Ask Aria to find or create something..."
            rows={1}
          ></textarea>
          <button className="bg-primary text-on-primary rounded p-sm hover:bg-primary-active transition-colors shrink-0 flex items-center justify-center h-[44px] w-[44px]">
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </>
  );
}
