const delay = (callback, duration) => {
    setTimeout(callback, duration);
  };

  const countdown = () => {
    let count = 10;

    delay(() => {
      document.getElementById('countdown').innerText = count;
      count--;

      delay(() => {
        document.getElementById('countdown').innerText = count;
        count--;

        delay(() => {
          document.getElementById('countdown').innerText = count;
          count--;

          delay(() => {
            document.getElementById('countdown').innerText = count;
            count--;

            delay(() => {
              document.getElementById('countdown').innerText = count;
              count--;

              delay(() => {
                document.getElementById('countdown').innerText = count;
                count--;

                delay(() => {
                  document.getElementById('countdown').innerText = count;
                  count--;

                  delay(() => {
                    document.getElementById('countdown').innerText = count;
                    count--;

                    delay(() => {
                      document.getElementById('countdown').innerText = count;
                      count--;

                      delay(() => {
                      document.getElementById('countdown').innerText = count;
                      count--;

                      delay(() => {
                        document.getElementById('countdown').innerText = 'Happy Independence Day ✨!!!';
                      }, 1000);
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
};

  countdown();