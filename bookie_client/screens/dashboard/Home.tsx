import React, {useState} from 'react';
import {usePostBookTitleMutation} from '../../api/api.ts';
import {GestureResponderEvent, SafeAreaView} from 'react-native';
import {Box, Button, TextareaAutosize, Typography} from '@mui/material';
import InputBox from '../../components/InputBox.ts';

const Home = () => {
  const [bookInfo] = usePostBookTitleMutation();
  const [bookName, setBookName] = useState('');

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement> | GestureResponderEvent,
  ) => {
    event.preventDefault();
    const formData = new FormData();
    console.log(formData.get('title'));

    //
    // const titleData = {
    //   title: titleValue,
    // };
    // setBookName(titleData.title);
    // console.log(titleData);
    // bookInfo({
    //   title: bookName,
    // })
    //   .unwrap()
    //   .then(updateResponse => {
    //     console.log('Book:', updateResponse);
    //   });
  };
  return (
    <SafeAreaView>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 2}}>
        <InputBox>
          <Typography mt={3} ml={1} variant="h4" fontWeight="1000">
            Rate
          </Typography>
          <TextareaAutosize
            style={{marginLeft: '2rem', width: '13rem', marginTop: '0.4rem'}}
            required
            id="title"
            name="title"
            autoFocus
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{mt: 3, mb: 2}}
            onClick={() => {}}>
            Sumbit
          </Button>
        </InputBox>
      </Box>
    </SafeAreaView>
  );
};

export default Home;
