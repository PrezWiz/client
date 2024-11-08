interface HeadingProps {
  children: string;
  subtext?: string;
}

const HeadingText = ({ children, subtext }: HeadingProps) => {
  return (
    <header className="mb-6 flex flex-col items-center space-y-2 text-center">
      <h1 className="text-3xl font-bold text-primary lg:text-4xl">{children}</h1>
      <h2 className="font-light text-muted-foreground lg:text-xl">{subtext}</h2>
    </header>
  );
};

export default HeadingText;
