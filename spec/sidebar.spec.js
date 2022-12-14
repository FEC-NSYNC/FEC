import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Sidebar from '../client/src/components/ProductOverview/Sidebar.jsx';
import StyleIcons from '../client/src/components/ProductOverview/StyleIcons.jsx';
import ShareIcons from '../client/src/components/ProductOverview/ShareIcons.jsx';

/**
 * @jest-environment jsdom
 */
const styles = [
  {
    style_id: 1,
    name: 'Forest Green & Black',
    original_price: '140',
    sale_price: '0',
    'default?': true,
    photos: [
      {
        thumbnail_url: 'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/427917/chip/goods_58_427917_chip.jpg',
        url: 'urlplaceholder/style_1_photo_number.jpg',
      },
      {
        thumbnail_url: 'urlplaceholder/style_1_photo_number_thumbnail.jpg',
        url: 'urlplaceholder/style_1_photo_number.jpg',
      },
      // ...
    ],
    skus: {
      37: {
        quantity: 8,
        size: 'XS',
      },
      38: {
        quantity: 16,
        size: 'S',
      },
      39: {
        quantity: 17,
        size: 'M',
      },
      // ...
    },
  },
  {
    style_id: 2,
    name: 'Ocean Blue & White',
    original_price: '140',
    sale_price: '0',
    'default?': false,
    photos: [
      {
        thumbnail_url: 'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/427917/chip/goods_65_427917_chip.jpg',
        url: 'urlplaceholder/style_1_photo_number.jpg',
      },
      {
        thumbnail_url: 'urlplaceholder/style_1_photo_number_thumbnail.jpg',
        url: 'urlplaceholder/style_1_photo_number.jpg',
      },
      // ...
    ],
    skus: {
      40: {
        quantity: 3,
        size: 'XS',
      },
      41: {
        quantity: 4,
        size: 'S',
      },
      42: {
        quantity: 13247,
        size: 'M',
      },
      // ...
    },
  },
  {
    style_id: 3,
    name: 'Fire Red & Orange',
    original_price: '140',
    sale_price: '30',
    'default?': false,
    photos: [
      {
        thumbnail_url: 'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/427917/chip/goods_27_427917_chip.jpg',
        url: 'urlplaceholder/style_1_photo_number.jpg',
      },
      {
        thumbnail_url: 'urlplaceholder/style_1_photo_number_thumbnail.jpg',
        url: 'urlplaceholder/style_1_photo_number.jpg',
      },
      // ...
    ],
    skus: {
      37: {
        quantity: 8,
        size: 'XS',
      },
      38: {
        quantity: 16,
        size: 'S',
      },
      39: {
        quantity: 17,
        size: 'M',
      },
      // ...
    },
  },
  {
    style_id: 4,
    name: 'Stone Grey',
    original_price: '140',
    sale_price: '0',
    'default?': false,
    photos: [
      {
        thumbnail_url: 'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/427917/chip/goods_08_427917_chip.jpg',
        url: 'urlplaceholder/style_1_photo_number.jpg',
      },
      {
        thumbnail_url: 'urlplaceholder/style_1_photo_number_thumbnail.jpg',
        url: 'urlplaceholder/style_1_photo_number.jpg',
      },
      // ...
    ],
    skus: {
      40: {
        quantity: 0,
        size: 'XS',
      },
      41: {
        quantity: 0,
        size: 'S',
      },
      42: {
        quantity: 0,
        size: 'M',
      },
      // ...
    },
  },
  {
    style_id: 5,
    name: 'Forest Green & Black',
    original_price: '140',
    sale_price: '0',
    'default?': false,
    photos: [
      {
        thumbnail_url: 'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/427917/chip/goods_58_427917_chip.jpg',
        url: 'urlplaceholder/style_1_photo_number.jpg',
      },
      {
        thumbnail_url: 'urlplaceholder/style_1_photo_number_thumbnail.jpg',
        url: 'urlplaceholder/style_1_photo_number.jpg',
      },
      // ...
    ],
    skus: {
      37: {
        quantity: 8,
        size: 'XS',
      },
      38: {
        quantity: 16,
        size: 'S',
      },
      39: {
        quantity: 17,
        size: 'M',
      },
      // ...
    },
  },
  {
    style_id: 6,
    name: 'Ocean Blue & White',
    original_price: '140',
    sale_price: '0',
    'default?': false,
    photos: [
      {
        thumbnail_url: 'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/427917/chip/goods_65_427917_chip.jpg',
        url: 'urlplaceholder/style_1_photo_number.jpg',
      },
      {
        thumbnail_url: 'urlplaceholder/style_1_photo_number_thumbnail.jpg',
        url: 'urlplaceholder/style_1_photo_number.jpg',
      },
      // ...
    ],
    skus: {
      40: {
        quantity: 3,
        size: 'XS',
      },
      41: {
        quantity: 4,
        size: 'S',
      },
      42: {
        quantity: 13247,
        size: 'M',
      },
      // ...
    },
  },
  {
    style_id: 7,
    name: 'Fire Red & Orange',
    original_price: '140',
    sale_price: '30',
    'default?': false,
    photos: [
      {
        thumbnail_url: 'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/427917/chip/goods_27_427917_chip.jpg',
        url: 'urlplaceholder/style_1_photo_number.jpg',
      },
      {
        thumbnail_url: 'urlplaceholder/style_1_photo_number_thumbnail.jpg',
        url: 'urlplaceholder/style_1_photo_number.jpg',
      },
      // ...
    ],
    skus: {
      37: {
        quantity: 8,
        size: 'XS',
      },
      38: {
        quantity: 16,
        size: 'S',
      },
      39: {
        quantity: 17,
        size: 'M',
      },
      // ...
    },
  },
  {
    style_id: 8,
    name: 'Stone Grey',
    original_price: '140',
    sale_price: '0',
    'default?': false,
    photos: [
      {
        thumbnail_url: 'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/427917/chip/goods_08_427917_chip.jpg',
        url: 'urlplaceholder/style_1_photo_number.jpg',
      },
      {
        thumbnail_url: 'urlplaceholder/style_1_photo_number_thumbnail.jpg',
        url: 'urlplaceholder/style_1_photo_number.jpg',
      },
      // ...
    ],
    skus: {
      40: {
        quantity: 0,
        size: 'XS',
      },
      41: {
        quantity: 0,
        size: 'S',
      },
      42: {
        quantity: 0,
        size: 'M',
      },
      // ...
    },
  }];

test('addToCart renders correctly', () => {
  render(<Sidebar productName="st" productCategory="st" allStyles={[]} updateStyleImage={() => {}} />);
  const addToCartElement = screen.getByText(/add to cart/i);
  expect(addToCartElement).toBeInTheDocument();
  expect(addToCartElement).not.toBeVisible();
});

test('styleSelector renders correctly', () => {
  const { container } = render(<StyleIcons allStyles={styles} setSelectedStyle={() => {}} />);

  const styleIcons = container.getElementsByClassName('checkOverlay');
  expect(styleIcons.length).toBe(styles.length);
});

test('default style is chosen', () => {
  const { container } = render(<StyleIcons allStyles={styles} setSelectedStyle={() => {}} />);

  const styleIcons = container.getElementsByClassName('checkOverlay');
  expect(styleIcons[0]).not.toHaveAttribute('hidden');
  expect(styleIcons[1]).toHaveAttribute('hidden');
});

test('share icons rendered', () => {
  const { container } = render(<ShareIcons
    url="test"
    productName="test"
    productCategory="test"
    style={{}}
  />);

  const icons = container.getElementsByClassName('shareIcon');
  expect(icons.length).toBe(3);
});

test('share icons open popups', () => {
  window.open = jest.fn();
  const { container } = render(<ShareIcons
    url="test"
    productName="test"
    productCategory="test"
    style={{}}
  />);

  const button = container.getElementsByClassName('fa-facebook')[0];
  fireEvent.click(button);

  expect(window.open).toHaveBeenCalled();
  expect(window.open).toHaveBeenCalledWith('https://www.facebook.com/sharer.php?u=test', 'popup', 'height=600,width=400');

  jest.resetAllMocks();
});
