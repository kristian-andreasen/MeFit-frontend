import { getAllPrograms } from '../../api/fetchProgramData';
import { useEffect, useState } from 'react';

function SelectProgram({ onSelect }) {
  const [programs, setPrograms] = useState([]);
  const [selectedProgram, setSelectedProgram] = useState(null);

  useEffect(() => {
    // fetch the list of programs when the component mounts
    async function fetchPrograms() {
      const [, data] = await getAllPrograms();
      setPrograms(data);
    }
    fetchPrograms();
  }, []);

  const handleSelectChange = (event) => {
    const programId = event.target.value;
    const program = programs.find((p) => p.id === Number(programId));
    setSelectedProgram(program);
    onSelect(program);
  };

  return (
    <select onChange={handleSelectChange}>
      <option value=''>-- Select --</option>
      {programs.map((program) => (
        <option className='program-item' key={program.id} value={program.id}>
          {program.name}
        </option>
      ))}
    </select>
  );
}

export default SelectProgram;
