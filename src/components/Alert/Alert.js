const Alert = ({ error }) => {
  return (
    <>
      {error ? (
        <div className='ui error message'>
          <div className='header'>{error.status}</div>
          <p>{error.message}</p>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default Alert;
