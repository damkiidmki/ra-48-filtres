import { useState } from 'react';
import ProjectList from './ProjectList';
import Toolbar from './Toolbat';

function Portfolio({ projectList }) {

  const [filteredList, filtered] = useState(projectList);
  const [selected, selectedItem] = useState('All');

  const filter = (event) => {
    let buttons = document.querySelectorAll('button');
    buttons.forEach(x => x.classList.remove('active'));
    
    event.target.classList.add('active');

    let select = event.target.textContent;
    
    if (select !== 'All') {
      filtered(
        projectList.filter(x => x.category === select)
      );
    } 
    else {
      filtered(projectList);
    }

    selectedItem(select);
  }

  return (
    <div className='container'>
      <Toolbar 
        filters={['All', 'Websites', 'Flayers', 'Business Cards']}
        selected={selected}
        onSelectFilter={filter}
      />

      <div className='gallery'>
        <ul className='gallery_list'>
          <ProjectList projects={filteredList} />
        </ul>
      </div>
    </div>
    );
}

export default Portfolio;