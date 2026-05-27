interface ParallaxBgProps {
  imageUrl: string;
}

const ParallaxBg = ({ imageUrl }: ParallaxBgProps) => (
  <div
    aria-hidden="true"
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: `url(${imageUrl})` }}
  />
);

export default ParallaxBg;
