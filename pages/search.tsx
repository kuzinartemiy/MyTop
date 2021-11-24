import { GetStaticPaths, GetStaticProps } from "next";
import React, { useState } from "react";
import { withLayout } from '../layout/Layout';
import axios from 'axios';
import { MenuItem } from "../interfaces/menu.interface";
import { firstLevelMenu } from "../heplers/helpers";

function Search(): JSX.Element {

  return (
    <>
      Search
    </>
  );
}

export default withLayout(Search);

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: string[] = [];

  for (const m of firstLevelMenu) {
    const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
      firstCategory: m.id
    });
    paths = paths.concat(menu.flatMap(s => s.pages.map(p => `/${m.route}/${p.alias}`)));
  }

  return {
    paths: firstLevelMenu.map(m => `/${m.route}`),
    fallback: true,
  }
}

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