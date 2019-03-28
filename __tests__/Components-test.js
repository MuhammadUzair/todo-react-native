import React from 'react';
import Header from '../src/components/Header';
import Circle from '../src/components/Circle';
import FlatButton from '../src/components/FlatButton';
import UserInput from '../src/components/UserInput';
import OverlayIndicator from '../src/components/OverlayIndicator';

import renderer from 'react-test-renderer';

test('renders correctly Header', () => {
  const tree = renderer.create(<Header />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders correctly Circle', () => {
  const tree = renderer.create(<Circle />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders correctly FlatButton', () => {
  const tree = renderer.create(<FlatButton />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders correctly UserInput', () => {
  const tree = renderer.create(<UserInput />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders correctly OverlayIndicator', () => {
  const tree = renderer.create(<OverlayIndicator />).toJSON();
  expect(tree).toMatchSnapshot();
});
