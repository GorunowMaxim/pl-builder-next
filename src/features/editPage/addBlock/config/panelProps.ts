import { VirtualNode } from "entities/editablePage";

type ButtonData = {
  buttonTitle: string;
  data: VirtualNode;
};

export const buttonConfig: ButtonData[] = [
  {
    buttonTitle: "hero section",
    data: {
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
              justifyContent: 'center'
            }
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
            {
              type: "h1",
              props: {
                className: "hero-section__headline",
                style: { color: 'black' }
              },
              children: ["Hero section"],
            },
            {
              type: "p",
              props: {
                className: "hero-section__text",
                style: { width: '600px', fontSize: '22px', textAlign: 'center', color: 'black' }
              },
              children: ["Hey yeah! It's a hero section, here u can describe your landing, tell about it a little or write what u wanna!"],
            },
          ],
        },
      ],
    },
  },
  {
    buttonTitle: "text",
    data: {
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
    buttonTitle: "hero section",
    data: {
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
              justifyContent: 'center'
            }
          },
          children: [
            {
              type: "h4",
              props: {
                className: "hero-section__subtitle",
              },
              children: ["subtitle"],
            },
            {
              type: "h1",
              props: {
                className: "hero-section__headline",
              },
              children: ["Hero section"],
            },
            {
              type: "p",
              props: {
                className: "hero-section__text",
                style: { width: '600px', fontSize: '22px', textAlign: 'center' }
              },
              children: ["Hey yeah! It's a hero section, here u can describe your landing, tell about it a little or write what u wanna!"],
            },
          ],
        },
      ],
    },
  },
  {
    buttonTitle: "gallery",
    data: {
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
