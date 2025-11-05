const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t-2 border-border">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Diyar Karim. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
