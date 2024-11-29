import { VirtualNode } from "shared/types";

type BlockConfig = {
  title: string;
  template: VirtualNode;
};

export const blockConfigurations: BlockConfig[] = [
  {
    title: "hero section",
    template: {
      type: "section",
      props: {
        className: "hero-section",
        style: { minHeight: '100vh' }
      },
      children: [
        {
          type: "div",
          props: {
            className: "hero-section__wrapper width-wrapper",
            style: {
              minHeight: '100vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }
          },
          children: [
            {
              type: "div",
              props: {
                className: "hero-section__subtitle-wrapper",
                style: {
                  width: '80%',
                  margin: '10px 0',
                }
              },
              children: [
                {
                  type: "h4",
                  props: {
                    className: "hero-section__subtitle subtitle",
                    style: { color: 'black', textAlign: 'center' }
                  },
                  children: ["subtitle"],
                },
              ],
            },
            {
              type: "div",
              props: {
                className: "hero-section__headline-wrapper",
                style: {
                  width: '80%',
                  margin: '10px 0',
                }
              },
              children: [
                {
                  type: "h1",
                  props: {
                    className: "hero-section__headline headline",
                    style: { color: 'black', textAlign: 'center' }
                  },
                  children: ["Hero section"],
                },
              ],
            },
            {
              type: "div",
              props: {
                className: "hero-section__text-wrapper",
                style: {
                  width: '80%',
                  margin: '10px 0',
                }
              },
              children: [
                {
                  type: "p",
                  props: {
                    className: "hero-section__text text p",
                    style: { textAlign: 'center', color: 'black' }
                  },
                  children: ["Hey yeah! It's a hero section, here u can describe your landing, tell about it a little or write what u wanna!"],
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    title: "text",
    template: {
      type: "section",
      props: {
        className: "info",
        style: { padding: '50px 0' }
      },
      children: [
        {
          type: "div",
          props: {
            className: "info-section__wrapper width-wrapper",
            style: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }
          },
          children: [
            {
              type: "div",
              props: {
                className: "info-section__text-wrapper",
                style: {
                  width: '80%'
                }
              },
              children: [
                {
                  type: "p",
                  props: {
                    className: "info-section__text text p",
                    style: {
                      textAlign: 'center',
                      color: 'black',
                    }
                  },
                  children: ["Book design is the art of incorporating the content, style, format, design, and sequence of the various components of a book into a coherent whole. In the words of Jan Tschichold, methods and rules upon which it is impossible to improve, have been developed over centuries. To produce perfect books, these rules have to be brought back to life and applied. Front matter, or preliminaries, is the first section of a book and is usually the smallest section in terms of the number of pages. Each page is counted, but no folio or page number is expressed or printed, on either display pages or blank pages."],
                },
              ],
            },

          ],
        },
      ],
    },
  },
  {
    title: "content block",
    template: {
      type: "section",
      props: {
        className: "content-section",
        style: { padding: '30px 0' }
      },
      children: [
        {
          type: "div",
          props: {
            className: "content-section__wrapper width-wrapper",
            style: {
              height: 'auto',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }
          },
          children: [
            {
              type: "div",
              props: {
                className: "content-section__headline-wrapper",
                style: { width: '70%', margin: '10px 0' },
              },
              children: [
                {
                  type: "h2",
                  props: {
                    className: "content-section__headline headline",
                    style: { textAlign: 'center', color: 'black' }
                  },
                  children: ["Headline - tell smth about it"],
                },
              ],
            },
            {
              type: "div",
              props: {
                className: "content-section__text-wrapper",
                style: { width: '70%', margin: '10px 0' },
              },
              children: [
                {
                  type: "p",
                  props: {
                    className: "content-section__text text p",
                    style: { textAlign: 'center', color: 'black' }
                  },
                  children: ["Description – the main idea. Use 1-2 sentences in 1-3 lines if centered. For more text, use a different content alignment type."],
                },
              ],
            },
            {
              type: "div",
              props: {
                className: "content-section__blocks",
              },
              children: [
                {
                  type: "div",
                  props: {
                    className: "content-section__block",
                    style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '55px 0', gap: '55px' }
                  },
                  children: [
                    {
                      type: 'div',
                      props: {
                        className: 'content-section__block-img',
                        style: { width: '500px', height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#F7F8FA', borderRadius: '10px' }
                      },
                      children: [
                        {
                          type: 'img',
                          props: {
                            src: '/icons/iconImage.svg',
                            style: { width: '45px', height: '45px' }
                          },
                          children: []
                        }
                      ]
                    },
                    {
                      type: 'div',
                      props: {
                        className: 'content-section__block-info',
                        style: { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '500px', height: '500px' }
                      },
                      children: [
                        {
                          type: 'div',
                          props: {
                            className: 'content-section__headline-wrapper',
                            style: { width: '90%', margin: '10px 0' },
                          },
                          children: [
                            {
                              type: 'h4',
                              props: {
                                className: 'content-section__block-info-headline headline',
                                style: { textAlign: 'center', color: 'black' }
                              },
                              children: [
                                'subtitle'
                              ]
                            },
                          ]
                        },
                        {
                          type: 'div',
                          props: {
                            className: 'content-section__text-wrapper',
                            style: { width: '90%', margin: '10px 0' },
                          },
                          children: [
                            {
                              type: 'p',
                              props: {
                                className: 'content-section__block-info-text text p',
                                style: { textAlign: 'center', color: 'black' }
                              },
                              children: [
                                'describe 3-5 lines'
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ],
                },
                {
                  type: "div",
                  props: {
                    className: "content-section__block",
                    style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row-reverse', padding: '55px 0', gap: '55px' }
                  },
                  children: [
                    {
                      type: 'div',
                      props: {
                        className: 'content-section__block-img',
                        style: { width: '500px', height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#F7F8FA', borderRadius: '10px' }
                      },
                      children: [
                        {
                          type: 'img',
                          props: {
                            src: '/icons/iconImage.svg',
                            style: { width: '45px', height: '45px' }
                          },
                          children: []
                        }
                      ]
                    },
                    {
                      type: 'div',
                      props: {
                        className: 'content-section__block-info',
                        style: { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '500px', height: '500px' }
                      },
                      children: [
                        {
                          type: 'div',
                          props: {
                            className: 'content-section__headline-wrapper',
                            style: { width: '90%', margin: '10px 0' },
                          },
                          children: [
                            {
                              type: 'h4',
                              props: {
                                className: 'content-section__block-info-headline headline',
                                style: { textAlign: 'center', color: 'black' }
                              },
                              children: [
                                'subtitle'
                              ]
                            },
                          ]
                        },
                        {
                          type: 'div',
                          props: {
                            className: 'content-section__text-wrapper',
                            style: { width: '90%', margin: '10px 0' },
                          },
                          children: [
                            {
                              type: 'p',
                              props: {
                                className: 'content-section__block-info-text text p',
                                style: { textAlign: 'center', color: 'black' }
                              },
                              children: [
                                'describe 3-5 lines'
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    title: "gallery",
    template: {
      type: "section",
      props: {
        className: "carousel",
      },
      children: [
        {
          type: "h4",
          props: {
            className: "carousel__headline",
            style: { padding: '20px 0', width: '600px', fontSize: '22px', textAlign: 'center', margin: '0 auto' }
          },
          children: ['In development...'],
        },
      ],
    },
  },
  {
    title: "FAQ",
    template: {
      type: "section",
      props: {
        className: "faq",
        style: { padding: '50px 0' }
      },
      children: [
        {
          type: "div",
          props: {
            className: "faq-section__wrapper width-wrapper",
            style: {
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }
          },
          children: [
            {
              type: "div",
              props: {
                className: "faq-section__headline-wrapper",
                style: { width: '80%', margin: '10px 0' }
              },
              children: [
                {
                  type: "h2",
                  props: {
                    className: "faq-section__headline headline",
                    style: { color: 'black', textAlign: 'center' }
                  },
                  children: ["FAQ"],
                },
              ],
            },
            {
              type: "div",
              props: {
                className: "faq-accordion",
                style: { width: '100%' }
              },
              children: [
                {
                  type: "div",
                  props: {
                    className: "faq-accordion__wrapper",
                    style: {
                      padding: '50px 0',
                      margin: '0 auto',
                      width: '60%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }
                  },
                  children: [
                    {
                      type: "div",
                      props: {
                        className: "faq-accordion__item",
                        'data-accordion': true,
                      },
                      children: [
                        {
                          type: "div",
                          props: {
                            className: "faq-accordion__text-wrapper",
                            'data-accordion-tab': true,
                            style: {
                              width: '100%',
                            }
                          },
                          children: [
                            {
                              type: "p",
                              props: {
                                className: "faq-accordion__text text",
                                style: {
                                  textAlign: 'center',
                                  fontWeight: '600',
                                  fontSize: '18px',
                                }
                              },
                              children: [
                                'Here you can write headline of topic'
                              ],
                            },
                          ],
                        },
                        {
                          type: "div",
                          props: {
                            className: "text-wrapper",
                            'data-accordion-info': true,
                          },
                          children: [
                            {
                              type: "p",
                              props: {
                                className: "faq-accordion__text",
                                style: {
                                  padding: '25px',
                                  fontWeight: '600',
                                  fontSize: '18px',
                                }
                              },
                              children: [
                                'sdjkhfjkashfksfhashkf'
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "div",
                      props: {
                        className: "faq-accordion__item",
                        'data-accordion': true,
                      },
                      children: [
                        {
                          type: "div",
                          props: {
                            className: "faq-accordion__text-wrapper",
                            'data-accordion-tab': true,
                            style: {
                              width: '100%',
                            }
                          },
                          children: [
                            {
                              type: "p",
                              props: {
                                className: "faq-accordion__text text",
                                style: {
                                  textAlign: 'center',
                                  fontWeight: '600',
                                  fontSize: '18px',
                                }
                              },
                              children: [
                                'Here you can write headline of topic'
                              ],
                            },
                          ],
                        },
                        {
                          type: "div",
                          props: {
                            className: "text-wrapper",
                            'data-accordion-info': true,
                          },
                          children: [
                            {
                              type: "p",
                              props: {
                                className: "faq-accordion__text",
                                style: {
                                  padding: '25px',
                                  fontWeight: '600',
                                  fontSize: '18px',
                                }
                              },
                              children: [
                                'sdjkhfjkashfksfhashkf'
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ]
                },
              ],
            },
          ],
        },
      ],
    },
  },
];
