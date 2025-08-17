const ImgUpload = (props) => {
  
  const ShowImageHandler = (e) => {
      const file = e.target.files[0];
      if (file) {
          props.UploadImageHandler(file);
      }
  };

  return (
      <div className="bg-transparent backdrop-blur-sm border border-gray-800 shadow-xl rounded-2xl p-4 w-full max-w-xl">
          <label
              htmlFor="fileInput"
              className="group block w-full cursor-pointer border-2 border-dashed border-gray-700 rounded-lg p-4 
              text-center hover:border-blue-500 transition-all duration-300 relative overflow-hidden
              hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10"
          >
              <input
                  type="file"
                  id="fileInput"
                  className="hidden"
                  accept="image/*"
                  onChange={ShowImageHandler}
              />
              <div className="space-y-2">
                  <svg 
                      className="w-8 h-8 mx-auto text-gray-400 group-hover:text-blue-400 transition-colors duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                  >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <span className="text-base font-medium text-gray-300 group-hover:text-blue-400 transition-colors duration-300">
                      Drop your image here or click to upload
                  </span>
                  <p className="text-xs text-gray-500">
                      Supported formats: PNG, JPG, JPEG
                  </p>
              </div>
          </label>
      </div>
  );
};

export default ImgUpload;