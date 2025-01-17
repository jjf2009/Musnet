import React, { useEffect } from 'react'
import InputField from '../addBook/InputField'
import SelectField from '../addBook/SelectField'
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useFetchMusicByIdQuery, useUpdateMusicMutation } from '../../../redux/features/musics/muiscsApi';
import Loading from '../../../components/Loading';
import Swal from 'sweetalert2';
import axios from 'axios';
import getBaseUrl from '../../../utils/baseURL';

const UpdateBook = () => {
  const { id } = useParams();
  const { data: muiscData, isLoading, isError, refetch } = useFetchMusicByIdQuery(id);
  // console.log(bookData)
  const [updateMusic] = useUpdateMusicMutation();
  const { register, handleSubmit, setValue, reset } = useForm();
  useEffect(() => {
    if (bookData) {
      setValue('title', muiscData.title);
      setValue('description',muiscData.description);
      setValue('category', muiscData?.category);
      setValue('trending', muiscData.trending);
      // setValue('oldPrice', muiscData.oldPrice);
      // setValue('newPrice', muisc.newPrice);
      setValue('coverImage', muisc.coverImage)
    }
  }, [muiscData, setValue])

  const onSubmit = async (data) => {
    const updateMusicData = {
      title: data.title,
      description: data.description,
      category: data.category,
      trending: data.trending,
      // oldPrice: Number(data.oldPrice),
      // newPrice: Number(data.newPrice),
      coverImage: data.coverImage || muiscData.coverImage,
    };
    try {
      await axios.put(`${getBaseUrl()}/api/musics/edit/${id}`, updateMusicData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
      Swal.fire({
        title: "Song Updated",
        text: "Your song is updated successfully!",
        icon: "success",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, It's Okay!"
      });
      await refetch()
    } catch (error) {
      console.log("Failed to update song.");
      alert("Failed to update book.");
    }
  }
  if (isLoading) return <Loading />
  if (isError) return <div>Error fetching song data</div>
  return (
    <div className="max-w-lg mx-auto md:p-6 p-3 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Update song</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label="Title"
          name="title"
          placeholder="Enter song title"
          register={register}
        />

        <InputField
          label="Description"
          name="description"
          placeholder="Enter song description"
          type="textarea"
          register={register}
        />

        <SelectField
          label="Category"
          name="category"
          options={[
            { value: '', label: 'Choose A Category' },
            { value: 'pop', label: 'Pop' },
            { value: 'rock', label: 'Rock' },
            { value: 'hiphop', label: 'Hip Hop' },
            { value: 'classical', label: 'Classical' },
            { value: 'latin', label: 'latin' },
            // Add more options as needed
          ]}
          register={register}
        />
        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              {...register('trending')}
              className="rounded text-blue-600 focus:ring focus:ring-offset-2 focus:ring-blue-500"
            />
            <span className="ml-2 text-sm font-semibold text-gray-700">Trending</span>
          </label>
        </div>
{/* 
        <InputField
          label="Old Price"
          name="oldPrice"
          type="number"
          placeholder="Old Price"
          register={register}
        /> */}

        {/* <InputField
          label="New Price"
          name="newPrice"
          type="number"
          placeholder="New Price"
          register={register}
        /> */}

        <InputField
          label="Cover Image URL"
          name="coverImage"
          type="text"
          placeholder="Cover Image URL"
          register={register}
        />

        <button type="submit" className="w-full py-2 bg-blue-500 text-white font-bold rounded-md">
          Update Song
        </button>
      </form>
    </div>
  )
}

export default UpdateMusic