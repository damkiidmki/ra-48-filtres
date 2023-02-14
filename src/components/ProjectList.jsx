function ProjectList({ projects }) {
  let count = 0;

  return (
    projects.map(item => (
      <li className='gallery_item' key={count++}>
        <img src={item.img} alt='' />
      </li>
    ))
  );
}

export default ProjectList;