import { useEffect } from 'react';
import { useParams } from 'react-router';
import { POSTS } from '../../utils/data';

export default function useProduct(props) {
  const { productId } = useParams();
  const product = POSTS.find((post) => post.id === productId);
  const {
    seller,
    productImages,
    featured,
    img,
    price,
    type,
    descr,
    location,
    timeStamp,
    id,
  } = product;

  useEffect(() => {
    document.title = descr;
  }, [descr]);

  return {
    ...props,
    seller,
    productImages,
    featured,
    img,
    price,
    type,
    descr,
    location,
    timeStamp,
    id,
  };
}
