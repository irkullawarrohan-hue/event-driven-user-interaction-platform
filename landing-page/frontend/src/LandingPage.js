const LandingPage = () => {

  const handleBuyCourseClick = () => {
    fetch('http://localhost:8080/producer/event', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ event: 'userClick' }),
    })
      .then(res => {
        if (!res.ok) throw new Error('Request failed');
        console.log('Event sent to backend');
      })
      .catch(err => console.error(err));
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Welcome to our Course Platform</h1>
      <button onClick={handleBuyCourseClick}>
        Buy a course
      </button>
    </div>
  );
};

export default LandingPage;
