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
        style: { height: 'calc(100vh - 70px)' }
      },
      children: [
        {
          type: "div",
          props: {
            className: "hero-section__wrapper",
            style: {
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '15px',
            }
          },
          children: [
            {
              type: "div",
              props: {
                className: "subtitle-wrapper",
              },
              children: [
                {
                  type: "h4",
                  props: {
                    className: "hero-section__subtitle",
                    style: { color: 'black' }
                  },
                  children: ["subtitle"],
                },
              ],
            },
            {
              type: "div",
              props: {
                className: "headline-wrapper",
              },
              children: [
                {
                  type: "h1",
                  props: {
                    className: "hero-section__headline",
                    style: { color: 'black' }
                  },
                  children: ["Hero section"],
                },
              ],
            },
            {
              type: "div",
              props: {
                className: "text-wrapper text-wrapper_center",
              },
              children: [
                {
                  type: "p",
                  props: {
                    className: "hero-section__text p",
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
            className: "info-section__wrapper",
            style: {
              height: '100%',
              maxWidth: '1200px',
              margin: '0 auto',
            }
          },
          children: [
            {
              type: "p",
              props: {
                className: "info-section__text",
                style: {
                  width: '100%',
                  fontSize: '16px',
                  textAlign: 'center',
                  color: 'black',
                  backgroundColor: 'white'
                }
              },
              children: ["Book design is the art of incorporating the content, style, format, design, and sequence of the various components of a book into a coherent whole. In the words of Jan Tschichold, methods and rules upon which it is impossible to improve, have been developed over centuries. To produce perfect books, these rules have to be brought back to life and applied. Front matter, or preliminaries, is the first section of a book and is usually the smallest section in terms of the number of pages. Each page is counted, but no folio or page number is expressed or printed, on either display pages or blank pages."],
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
        style: { padding: '20px' }
      },
      children: [
        {
          type: "div",
          props: {
            className: "content-section__wrapper",
            style: {
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
            }
          },
          children: [
            {
              type: "h2",
              props: {
                className: "content-section__headline",
              },
              children: ["Headline - tell smth about it"],
            },
            {
              type: "p",
              props: {
                className: "content-section__text p",
              },
              children: ["Description – the main idea. Use 1-2 sentences in 1-3 lines if centered. For more text, use a different content alignment type."],
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
                    style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '35px 0', gap: '25px' }
                  },
                  children: [
                    {
                      type: 'div',
                      props: {
                        className: 'content-section__block-img',
                        style: { width: '500px', height: '500px', backgroundColor: 'grey' }
                      },
                      children: []
                    },
                    {
                      type: 'div',
                      props: {
                        className: 'content-section__block-info',
                        style: { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '500px', height: '500px', }
                      },
                      children: [
                        {
                          type: 'h4',
                          props: {
                            className: 'content-section__block-info-headline'
                          },
                          children: [
                            'subtitle'
                          ]
                        },
                        {
                          type: 'p',
                          props: {
                            className: 'content-section__block-info-headline p'
                          },
                          children: [
                            'describe 3-5 lines'
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
                    style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row-reverse' , padding: '35px 0', gap: '25px' }
                  },
                  children: [
                    {
                      type: 'div',
                      props: {
                        className: 'content-section__block-img',
                        style: { width: '500px', height: '500px', backgroundColor: 'grey' }
                      },
                      children: []
                    },
                    {
                      type: 'div',
                      props: {
                        className: 'content-section__block-info',
                        style: { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '500px', height: '500px', }
                      },
                      children: [
                        {
                          type: 'h4',
                          props: {
                            className: 'content-section__block-info-headline'
                          },
                          children: [
                            'subtitle'
                          ]
                        },
                        {
                          type: 'p',
                          props: {
                            className: 'content-section__block-info-headline p'
                          },
                          children: [
                            'describe 3-5 lines'
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
];
