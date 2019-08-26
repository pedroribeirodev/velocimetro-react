import styled from 'styled-components';

export const Container = styled.div`
#wrapper {
  width: 400px;
  height: 400px;
  position: relative;
    #meter {
        width: 100%;
        height: 100%;
        transform: rotateX(180deg);
    }
    .arrow {
        position: absolute;
        left: 50%;
        top: 7.5%;
        height: 174.1px;
        -webkit-animation: rotate-center 0.7s ease-in-out both;
	        animation: rotate-center 0.7s ease-in-out both;
    }
    .circle {
        position: absolute;
        left: 49.3%;
        top: 48.5%;
    }
    .wrap {
        position: absolute;
        height: 3px;
        top: 50%;
        background: #efedf3;
        width: 400px;
    }
}
@keyframes rotate-center {
    0% {
        -webkit-transform: rotate(-90deg);
                transform: rotate(-90deg);
        -webkit-transform-origin: bottom;
                transform-origin: bottom;
    }
    91% {
        -webkit-transform: rotate(15deg);
                transform: rotate(15deg);
        -webkit-transform-origin: bottom;
                transform-origin: bottom;
    }
    92% {
    -webkit-transform: rotate(10deg);
            transform: rotate(10deg);
    -webkit-transform-origin: bottom;
            transform-origin: bottom;
    }
    93% {
        -webkit-transform: rotate(10deg);
                transform: rotate(10deg);
        -webkit-transform-origin: bottom;
                transform-origin: bottom;
    }
    94% {
        -webkit-transform: rotate(8deg);
                transform: rotate(8deg);
        -webkit-transform-origin: bottom;
                transform-origin: bottom;
    }
    95% {
        -webkit-transform: rotate(5deg);
                transform: rotate(5deg);
        -webkit-transform-origin: bottom;
                transform-origin: bottom;
    }

    96% {
        -webkit-transform: rotate(3deg);
                transform: rotate(3deg);
        -webkit-transform-origin: bottom;
                transform-origin: bottom;
    }
    97% {
        -webkit-transform: rotate(2deg);
                transform: rotate(2deg);
        -webkit-transform-origin: bottom;
                transform-origin: bottom;
    }
    100% {
        -webkit-transform: rotate(15deg);
                transform: rotate(15deg);
        -webkit-transform-origin: bottom;
                transform-origin: bottom;
    }
}
`;
