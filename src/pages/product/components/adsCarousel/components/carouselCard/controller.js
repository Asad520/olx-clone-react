export default function useCarouselCard(props) {
  const { location } = props;

  const locationText =
    location.length > 12 ? location.slice(0, 12) + '...' : location;
  return { ...props, locationText };
}
