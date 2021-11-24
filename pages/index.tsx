import { GetStaticProps } from "next";
import React, { useState } from "react";
import { Button, Htag, Input, Paragraph, Rating, Tag, Textarea } from "../components";
import { withLayout } from '../layout/Layout';
import axios from 'axios';
import { MenuItem } from "../interfaces/menu.interface";

function Home({ menu }:HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(1);

  return (
    <>
      <Rating isEditable rating={rating} setRating={setRating}/>
      <Htag tag="h1">TEST</Htag>
      <Button appearence="primary" arrow="right">TEST</Button>
      <Button appearence="ghost" arrow="down">TEST</Button>
      <Paragraph size="s">Test</Paragraph>
      <Paragraph size="m">Test</Paragraph>
      <Paragraph size="l">Test</Paragraph>
      <Htag tag="h2">Small Tags</Htag>
      <Tag size='s' color="ghost">Tag Test</Tag>
      <Tag size='s' color="red">Tag Test</Tag>
      <Tag size='s' color="gray">Tag Test</Tag>
      <Tag size='s' color="green">Tag Test</Tag>
      <Tag size='s' color="primary">Tag Test</Tag>
      <Tag size='m' color="red">Tag Test</Tag>
      <Htag tag="h2">Medium Tags</Htag>
      <Tag size='m' color="ghost" href="#">Tag Test</Tag>
      <Tag size='m' color="red">Tag Test</Tag>
      <Tag size='m' color="gray">Tag Test</Tag>
      <Tag size='m' color="green">Tag Test</Tag>
      <Tag size='m' color="primary">Tag Test</Tag>
      <Input placeholder='test'/>
      <Textarea />
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps = async () => {
  const firstCategory = 0;
   
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });
  return {
    props: {
      menu,
      firstCategory
    }
  };
};

interface HomeProps extends Record<string,unknown>{
  menu: MenuItem[],
  firstCategory: number,
}