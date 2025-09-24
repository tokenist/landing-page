"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Sparkles } from "lucide-react"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <>
      <section className="relative overflow-hidden min-h-screen flex flex-col">
        <div className="container mx-auto px-4 py-24 sm:py-32 relative z-10 flex-1 flex flex-col">
          <div className="mx-auto max-w-4xl text-center flex-1 flex flex-col justify-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <Badge variant="secondary" className="inline-flex items-center gap-2 px-4 py-2 text-sm">
                <Sparkles className="h-4 w-4" />
                Enterprise Solutions
              </Badge>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-8"
            >
              <h1 id="main-title" className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                Transform Your <strong>Business</strong> <span>&</span> <br />
                <strong>Data</strong> <em className="italic">Intelligently</em>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto mb-12 max-w-2xl text-lg text-muted-foreground"
            >
              Leading enterprise software solutions in ERP systems, Big Data analytics, modern website design, and
              artificial intelligence. Streamline operations and unlock insights for sustainable growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col items-center gap-6"
            >
              {/* Decorative Elements */}
              <svg
                width="100"
                height="50"
                viewBox="0 0 100 50"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="text-foreground mt-8"
              >
                <path d="M68.6958 5.40679C67.3329 12.7082 68.5287 20.1216 68.5197 27.4583C68.5189 29.5382 68.404 31.6054 68.1147 33.682C67.9844 34.592 69.4111 34.751 69.5414 33.8411C70.5618 26.5016 69.2488 19.104 69.4639 11.7325C69.5218 9.65887 69.7222 7.6012 70.0939 5.56265C70.1638 5.1949 69.831 4.81112 69.4601 4.76976C69.0891 4.72841 68.7689 5.01049 68.6958 5.40679Z"></path>
                <path d="M74.0117 26.1349C73.2662 27.1206 72.5493 28.1096 72.0194 29.235C71.5688 30.167 71.2007 31.137 70.7216 32.0658C70.4995 32.5033 70.252 32.9091 69.9475 33.3085C69.8142 33.4669 69.6779 33.654 69.5161 33.8093C69.4527 33.86 68.9199 34.2339 68.9167 34.2624C68.9263 34.1768 69.0752 34.3957 69.0055 34.2434C68.958 34.1515 68.8534 34.0531 68.8058 33.9612C68.6347 33.6821 68.4637 33.403 68.264 33.1208L67.1612 31.3512C66.3532 30.0477 65.5199 28.7126 64.7119 27.4093C64.5185 27.0699 63.9701 27.0666 63.7131 27.2979C63.396 27.5514 63.4053 27.9858 63.6018 28.2966C64.3845 29.5683 65.1956 30.8431 65.9783 32.1149L67.1572 33.9796C67.5025 34.5093 67.8225 35.2671 68.428 35.5368C69.6136 36.0446 70.7841 34.615 71.3424 33.7529C71.9992 32.786 72.4085 31.705 72.9035 30.6336C73.4842 29.3116 74.2774 28.1578 75.1306 26.9818C75.7047 26.2369 74.5573 25.3868 74.0117 26.1349ZM55.1301 12.2849C54.6936 18.274 54.6565 24.3076 55.0284 30.3003C55.1293 31.987 55.2555 33.7056 55.4419 35.4019C55.5431 36.3087 56.9541 36.0905 56.8529 35.1837C56.2654 29.3115 56.0868 23.3982 56.2824 17.4978C56.3528 15.8301 56.4263 14.1339 56.5537 12.4725C56.6301 11.5276 55.2034 11.3686 55.1301 12.2849Z"></path>
                <path d="M59.2642 30.6571C58.8264 31.475 58.36 32.2896 57.9222 33.1075C57.7032 33.5164 57.4843 33.9253 57.2369 34.3311C57.0528 34.6861 56.8656 35.0697 56.6278 35.3898C56.596 35.4152 56.5611 35.4691 56.5294 35.4944C56.4881 35.6054 56.5041 35.4627 56.5548 35.5261C56.7481 35.6055 56.8337 35.6151 56.7545 35.5484L56.6784 35.4533C56.6023 35.3581 56.5263 35.263 56.4534 35.1393C56.1778 34.7619 55.8734 34.3814 55.5946 34.0324C55.0146 33.2744 54.4315 32.545 53.8515 31.787C53.2685 31.0576 52.1584 31.945 52.7415 32.6744C53.4229 33.5592 54.1042 34.4441 54.7888 35.3004C55.1184 35.7127 55.4321 36.2677 55.8569 36.6039C56.3069 36.9719 56.884 36.9784 57.3533 36.6551C57.7624 36.3542 57.9845 35.9167 58.2067 35.4792C58.4636 34.9878 58.746 34.5282 59.003 34.0369C59.5423 33.0859 60.0563 32.1032 60.5957 31.1522C60.7765 30.8257 60.5104 30.3627 60.2092 30.2135C59.8161 30.112 59.4451 30.3305 59.2642 30.6571ZM44.5918 10.1569L42.2324 37.5406C42.0032 40.1151 41.8057 42.6641 41.5764 45.2386C41.5032 46.1549 42.9299 46.314 43.0032 45.3977L45.3626 18.014C45.5918 15.4396 45.7893 12.8905 46.0186 10.316C46.1235 9.37433 44.6968 9.21532 44.5918 10.1569Z"></path>
                <path d="M48.101 37.7616C46.7404 38.8232 45.8267 40.2814 44.9163 41.7109C44.0407 43.0866 43.1365 44.4592 41.738 45.3434C42.1247 45.5019 42.5146 45.6321 42.9014 45.7908C42.1324 41.8051 41.04 37.8699 39.6781 34.0203C39.545 33.6589 39.0695 33.5191 38.7365 33.6553C38.3719 33.817 38.2385 34.2353 38.3716 34.5969C39.7209 38.3007 40.7404 42.1121 41.4904 46.009C41.6012 46.5703 42.1877 46.7512 42.6539 46.4565C45.5462 44.6124 46.3877 40.9506 49.0169 38.8748C49.7178 38.2884 48.8304 37.1784 48.101 37.7616ZM25.9671 13.1014C25.7028 16.2497 26.0758 19.3824 26.5091 22.4929C26.9645 25.6636 27.4166 28.863 27.872 32.0337C28.1346 33.8253 28.3971 35.6167 28.631 37.4051C28.7607 38.3151 30.1717 38.0968 30.042 37.1868C29.5866 34.016 29.1281 30.8738 28.7012 27.7062C28.2647 24.6242 27.7396 21.5612 27.449 18.4666C27.2943 16.7449 27.2283 15.0042 27.3653 13.2572C27.4671 12.3442 26.0404 12.1851 25.9671 13.1014Z"></path>
                <path d="M30.5625 27.3357C29.9525 30.7343 29.3425 34.133 28.704 37.5284C29.1225 37.4018 29.5411 37.2751 29.9882 37.1516C28.6034 35.0617 27.2504 32.9465 25.8655 30.8565C25.6406 30.5425 25.1523 30.517 24.8669 30.7451C24.5497 30.9987 24.5305 31.4299 24.7555 31.7439C26.1403 33.8338 27.4933 35.9491 28.8781 38.039C29.2489 38.6003 30.0417 38.2265 30.1624 37.6621C30.7724 34.2635 31.3824 30.8648 32.0209 27.4694C32.0908 27.1016 31.758 26.7178 31.3871 26.6765C30.9559 26.6573 30.6324 26.9679 30.5625 27.3357Z"></path>
              </svg>

              {/* Get started button */}
              <div className="flex items-center justify-center">
                <a href="#features">
                  <div className="group cursor-pointer border border-border bg-card gap-2 h-[60px] flex items-center p-[10px] rounded-full">
                    <div className="border border-border bg-primary h-[40px] rounded-full flex items-center justify-center text-primary-foreground">
                      <p className="font-medium tracking-tight mr-3 ml-3 flex items-center gap-2 justify-center text-base">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-globe animate-spin"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                          <path d="M2 12h20"></path>
                        </svg>
                        Explore Solutions
                      </p>
                    </div>
                    <div className="text-muted-foreground group-hover:ml-4 ease-in-out transition-all size-[24px] flex items-center justify-center rounded-full border-2 border-border">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-arrow-right group-hover:rotate-180 ease-in-out transition-all"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Social Proof Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-auto pb-8"
          >
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-6">
                {/* Updated social proof text */}Trusted by enterprise clients worldwide
              </p>
              <div className="flex items-center justify-center gap-8">
                {/* Microsoft Logo */}
                <div className="opacity-60 grayscale hover:opacity-100 hover:grayscale-0 hover:drop-shadow-[0_0_8px_rgba(245,158,11,0.3)] transition-all duration-300">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    className="h-8 w-8 fill-current text-foreground"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0h11.377v11.372H0zm12.623 0H24v11.372H12.623zM0 12.623h11.377V24H0zm12.623 0H24V24H12.623z" />
                  </svg>
                </div>

                {/* Oracle Logo */}
                <div className="opacity-60 grayscale hover:opacity-100 hover:grayscale-0 hover:drop-shadow-[0_0_8px_rgba(245,158,11,0.3)] transition-all duration-300">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    className="h-8 w-8 fill-current text-foreground"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18.384 8.163c2.125 0 3.847 1.722 3.847 3.847s-1.722 3.847-3.847 3.847H5.616c-2.125 0-3.847-1.722-3.847-3.847s1.722-3.847 3.847-3.847h12.768z" />
                  </svg>
                </div>

                {/* SAP Logo */}
                <div className="opacity-60 grayscale hover:opacity-100 hover:grayscale-0 hover:drop-shadow-[0_0_8px_rgba(245,158,11,0.3)] transition-all duration-300">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    className="h-8 w-8 fill-current text-foreground"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>

                {/* AWS Logo */}
                <div className="opacity-60 grayscale hover:opacity-100 hover:grayscale-0 hover:drop-shadow-[0_0_8px_rgba(245,158,11,0.3)] transition-all duration-300">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    className="h-8 w-8 fill-current text-foreground"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335c-.072.048-.144.072-.208.072-.08 0-.16-.04-.239-.112-.112-.12-.207-.248-.279-.383-.072-.135-.144-.296-.224-.495-.56.66-1.263.99-2.111.99-.6 0-1.08-.17-1.439-.51-.36-.34-.543-.796-.543-1.367 0-.607.215-1.095.647-1.471.432-.376 1.008-.567 1.727-.567.24 0 .487.016.743.056.255.04.52.088.791.16v-.527c0-.551-.112-.936-.344-1.167-.23-.23-.62-.343-1.175-.343-.255 0-.52.032-.791.088-.272.056-.536.144-.792.24-.12.048-.207.08-.263.096-.056.016-.096.024-.128.024-.112 0-.168-.08-.168-.248v-.391c0-.128.016-.224.056-.28.04-.056.112-.112.207-.16.272-.144.6-.264.983-.36.384-.096.792-.144 1.224-.144.935 0 1.615.216 2.047.647.424.432.64 1.088.64 1.967v2.584zm-2.951 1.111c.231 0 .471-.04.727-.128.255-.088.48-.224.671-.408.12-.12.207-.255.263-.408.056-.152.088-.336.088-.551v-.264c-.208-.064-.424-.112-.647-.144-.224-.032-.44-.048-.655-.048-.464 0-.8.096-1.023.288-.224.192-.336.464-.336.823 0 .336.08.583.248.751.159.168.408.256.727.256zm5.783.735c-.144 0-.24-.024-.295-.08-.056-.056-.104-.16-.151-.311l-1.687-5.559c-.048-.16-.072-.263-.072-.32 0-.128.064-.2.191-.2h.783c.151 0 .255.024.303.08.056.056.104.16.144.311l1.207 4.767 1.119-4.767c.04-.16.088-.255.144-.311.056-.056.167-.08.303-.08h.639c.151 0 .255.024.303.08.056.056.104.16.144.311l1.135 4.831 1.247-4.831c.04-.16.096-.255.144-.311.056-.056.16-.08.303-.08h.743c.128 0 .2.064.2.2 0 .04-.008.08-.016.128-.008.048-.024.112-.048.192l-1.735 5.559c-.048.16-.096.255-.151.311-.056.056-.151.08-.295.08h-.687c-.151 0-.255-.024-.303-.08-.056-.056-.104-.16-.144-.32l-1.111-4.615-1.095 4.615c-.04.16-.088.255-.144.32-.056.056-.16.08-.303.08h-.687zm9.055.239c-.735 0-1.319-.216-1.743-.647-.424-.432-.639-1.008-.639-1.735 0-.76.2-1.36.607-1.791.408-.432.96-.647 1.663-.647.647 0 1.151.2 1.511.607.36.408.543.976.543 1.711 0 .112-.008.224-.016.336-.008.112-.024.2-.048.264-.024.064-.056.112-.096.144-.04.032-.096.048-.168.048h-3.335c.024.375.128.647.32.823.191.176.456.264.791.264.168 0 .336-.024.504-.072.168-.048.32-.112.456-.192.08-.048.144-.08.184-.096.04-.016.072-.024.096-.024.088 0 .128.064.128.2v.312c0 .104-.016.184-.048.24-.032.056-.088.112-.168.16-.168.088-.368.16-.6.216-.231.056-.472.08-.719.08zm1.615-2.527c0-.336-.08-.607-.24-.815-.16-.208-.384-.312-.671-.312-.296 0-.536.104-.719.312-.184.208-.296.48-.336.815h1.966z" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
