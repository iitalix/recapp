import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// Schema takes 2 options objects as arguments. The first being
// the KVPs we need for the profile, and an optional additional options object
const ProfileSchema = Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    location: {
      type: String,
    },
    phone: {
      type: String,
    },
    about: {
      type: String,
    },
    projects: {
      type: String,
    },
    work: {
      type: String,
    },
    skills: {
      type: String,
    },
    education: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// model the data using mongoose. we name it "Profile", and
// we tell mongoose how to do it by passing in our schema
export const Profile = mongoose.model('Profile', ProfileSchema);
