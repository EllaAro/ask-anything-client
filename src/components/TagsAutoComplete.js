import React ,{ useState } from 'react';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const categories = [ //this is dummy data
    { title: 'Sport', id: 1 },
    { title: 'News', id: 2 },
    { title: 'Art', id: 3 },
    { title: 'Cooking', id: 4 },
    { title: 'TV Shows', id: 5 },
  ];

const TagsAutoComplete = () => {
  const fixedOptions = [];
  const [value, setValue] = useState([]);

  return (
    <Autocomplete
      multiple
      value={value}
      onChange={(event, newValue) => {
        setValue([
          ...fixedOptions,
          ...newValue.filter((option) => fixedOptions.indexOf(option) === -1),
        ]);
      }}
      options={categories}
      getOptionLabel={(option) => option.title}
      renderTags={(tagValue, getTagProps) =>
        tagValue.map((option, index) => (
          <Chip
            label={option.title}
            {...getTagProps({ index })}
            disabled={fixedOptions.indexOf(option) !== -1}
          />
        ))
      }
      fullWidth
      renderInput={(params) => (
        <TextField {...params} label="Tags" variant="outlined" placeholder="Categories" />
      )}
    />
  );
}

export default TagsAutoComplete

