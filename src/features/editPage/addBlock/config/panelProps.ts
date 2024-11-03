import { PageBlock } from "entities/editablePage";

type ButtonData = {
  buttonTitle: string;
  data: PageBlock;
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
];
