export const SortUp = () => {
  return (
    <div className="sort-icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="10"
        viewBox="0 0 292 292"
        fill="#fff"
      >
        <g>
          <path
            d="M286.935,197.286L159.028,69.379c-3.613-3.617-7.895-5.424-12.847-5.424s-9.233,1.807-12.85,5.424L5.424,197.286
                C1.807,200.9,0,205.184,0,210.132s1.807,9.233,5.424,12.847c3.621,3.617,7.902,5.428,12.85,5.428h255.813
                c4.949,0,9.233-1.811,12.848-5.428c3.613-3.613,5.427-7.898,5.427-12.847S290.548,200.9,286.935,197.286z"
          />
        </g>
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="10"
        viewBox="0 0 292 292"
        fill="#aaa"
      >
        <g>
          <path
            d="M286.935,69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952,0-9.233,1.807-12.85,5.424
            C1.807,72.998,0,77.279,0,82.228c0,4.948,1.807,9.229,5.424,12.847l127.907,127.907c3.621,3.617,7.902,5.428,12.85,5.428
            s9.233-1.811,12.847-5.428L286.935,95.074c3.613-3.617,5.427-7.898,5.427-12.847C292.362,77.279,290.548,72.998,286.935,69.377z"
          />
        </g>
      </svg>
    </div>
  );
};

export const SortDown = () => {
  return (
    <div className="sort-icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="10"
        viewBox="0 0 292 292"
        fill="#aaa"
      >
        <g>
          <path
            d="M286.935,197.286L159.028,69.379c-3.613-3.617-7.895-5.424-12.847-5.424s-9.233,1.807-12.85,5.424L5.424,197.286
                C1.807,200.9,0,205.184,0,210.132s1.807,9.233,5.424,12.847c3.621,3.617,7.902,5.428,12.85,5.428h255.813
                c4.949,0,9.233-1.811,12.848-5.428c3.613-3.613,5.427-7.898,5.427-12.847S290.548,200.9,286.935,197.286z"
          />
        </g>
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="10"
        viewBox="0 0 292 292"
        fill="#fff"
      >
        <g>
          <path
            d="M286.935,69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952,0-9.233,1.807-12.85,5.424
            C1.807,72.998,0,77.279,0,82.228c0,4.948,1.807,9.229,5.424,12.847l127.907,127.907c3.621,3.617,7.902,5.428,12.85,5.428
            s9.233-1.811,12.847-5.428L286.935,95.074c3.613-3.617,5.427-7.898,5.427-12.847C292.362,77.279,290.548,72.998,286.935,69.377z"
          />
        </g>
      </svg>
    </div>
  );
};

export const FramedIcon = () => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 2048 2048" fill="#9A9A9A">
		<g>
			<g>
				<path d="M892.3,688v242h539v247.2h-539v411.9H609.1v-1150h889.1V688H892.3z"/>
			</g>
		</g>
		<path d="M143.6,138.5v1760.9h1760.9V138.5H143.6z M1783.8,1778.7H264.2V259.2h1519.6V1778.7z"/>
		</svg>
	);
}


export const Menu = () => {
  return (
    <svg viewBox="0 0 80 80" width="40" height="30" fill="#fff">
      <rect y="15" width="80" height="10"></rect>
      <rect y="35" width="80" height="10"></rect>
      <rect y="55" width="80" height="10"></rect>
    </svg>
  );
};

export const Fullscreen = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512">
      <polygon points="68.284,40 165,40 165,0 0,0 0,165 40,165 40,68.284 177,205.284 205.284,177" />
      <polygon points="205.284,335 177,306.716 40,443.716 40,347 0,347 0,512 165,512 165,472 68.284,472" />
      <polygon points="347,0 347,40 443.716,40 306.716,177 335,205.284 472,68.284 472,165 512,165 512,0" />
      <polygon points="472,347 472,443.716 335,306.716 306.716,335 443.716,472 347,472 347,512 512,512 512,347" />
    </svg>
  );
};

export const Cancel = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        fill="#fff"
        d="M21 4.41L19.59 3 12 10.59 4.41 3 3 4.41 10.59 12 3 19.59 4.41 21 12 13.41 19.59 21 21 19.59 13.41 12 21 4.41z"
      />
    </svg>
  );
};

export const ExitFullscreen = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 32 32">
      <polygon points="22.586,25.414 29.172,32 32,29.172 25.414,22.586 28,20 20,20 20,28" />
      <polygon points="6.547,9.371 4,12 11.961,11.957 12,4 9.375,6.543 2.828,0 0,2.828" />
      <polygon points="0,29.172 2.828,32 9.414,25.414 12,28 12,20 4,20 6.586,22.586" />
      <polygon points="28.031,12 25.438,9.404 32,2.838 29.164,0 22.598,6.566 20,3.971 20,12" />
    </svg>

  )
}

export const About = () => {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
    </svg>
  )
}
