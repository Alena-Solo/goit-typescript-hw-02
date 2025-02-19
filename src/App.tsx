import { useState } from "react";
import { useEffect, MouseEvent } from "react";
import toast, { Toaster } from "react-hot-toast";
import { fetchPhotos } from "./services/api";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import SearchBar from "./components/SearchBar/SearchBar";
import { ImageCardType } from "./types";

const FRIENDLY_ERROR_MESSAGES = {
  400: "Oops! Something went wrong with your request. Please check that all required information is provided and try again.",
  401: "Access denied! Please make sure you're logged in and using a valid access token to access this feature.",
  403: "You don’t have the necessary permissions to perform this action. Contact support if you think this is a mistake.",
  404: "The resource you’re looking for doesn’t seem to exist. Try searching for something else.",
  500: "Something went wrong on our end. We’re working to fix it as quickly as possible. Please try again later.",
  503: "Something went wrong on our end. We’re working to fix it as quickly as possible. Please try again later.",
};

function App() {
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
}

export default App;
