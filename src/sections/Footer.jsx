import { mySocials } from "../constants";

const Footer = () => {
  return (
    <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space">
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      <div className="flex gap-2">
        <p>subhamjha282@gmail.com</p>
        <p>|</p>
        <p>+91 7982262704</p>
      </div>
      <div className="flex gap-4">
        {mySocials.map((social, index) => (
          <a href={social.href} target="_blank" key={index} rel="noopener noreferrer">
            <img src={social.icon} className="w-5 h-5" alt={social.name} />
          </a>
        ))}
      </div>
      <p>© 2025 Subham Jha. All rights reserved.</p>
    </section>
  );
};

export default Footer;
