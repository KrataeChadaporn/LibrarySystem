import React from 'react';

import styled from "styled-components";
import Course from "../components/Course";


const CoursesPage = () => {
  // const {category} = useParams();
  // const {courses} = useCoursesContext();

  return (
    <CoursesPageWrapper>
      <div className='container'>
        <div className='category-based-list'>
          
              <Course/>
        </div>
      </div>
    </CoursesPageWrapper>
  )
}

const CoursesPageWrapper = styled.div`
  .category-based-list{
    margin-top: 32px;
  }
  @media screen and (min-width: 600px){
    .category-based-list{
      display: grid;
      gap: 26px;
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media screen and (min-width: 992px){
    .category-based-list{
      display: grid;
      gap: 26px;
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media screen and (min-width: 1400px){
    .category-based-list{
      display: grid;
      gap: 26px;
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export default CoursesPage