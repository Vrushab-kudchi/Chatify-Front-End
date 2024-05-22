import { Helmet } from "react-helmet-async";

export default function Title({
  title = "Chatify by Vrushab",
  description = "A Chating Application which is Secure and Safe to Use",
}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
    </Helmet>
  );
}
