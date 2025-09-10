import Head from 'next/head';

interface CustomHeadProps {
  title: string;
}

const CustomHead = ({ title }: CustomHeadProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Greg Toth is an indie hacker and AI fanatic building products that solve real problems. Portfolio built with Cursor AI editor theme."
      />
      <meta
        name="keywords"
        content="greg toth, greg, toth, indie hacker, AI fanatic, full stack developer, greg toth portfolio, AI developer, indie hacker portfolio, cursor-portfolio, cursor ai editor"
      />
      <meta property="og:title" content="Greg Toth's Portfolio" />
      <meta
        property="og:description"
        content="An indie hacker and AI fanatic building products that solve real problems. Portfolio built with Cursor AI editor theme."
      />
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://vscode-portfolio.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Greg Toth',
};
