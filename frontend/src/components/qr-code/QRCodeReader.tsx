import { FC, forwardRef, useEffect, useRef, useState } from 'react';
import jsQR from './jsQR';

export interface QRCodeReaderProps {
  onScan: (data: string) => void;
}


export interface QRCodeReaderRef {
  close: () => void;
}

const QRCodeReader: FC<QRCodeReaderProps> = forwardRef<QRCodeReaderRef | null, QRCodeReaderProps>((props, ref) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isVideoVisible, setIsVideoVisible] = useState<boolean>(false);

  const startQRCodeScanning = () => {
    const canvasElement = document.createElement('canvas');
    const canvas = canvasElement.getContext('2d');

    function scanQRCode() {
      if (!videoRef.current || videoRef.current.videoWidth === 0) {
        requestAnimationFrame(scanQRCode);
        return;
      }

      canvasElement.width = videoRef.current.videoWidth;
      canvasElement.height = videoRef.current.videoHeight;
      canvas?.drawImage(videoRef.current, 0, 0, canvasElement.width, canvasElement.height);

      const imageData = canvas?.getImageData(0, 0, canvasElement.width, canvasElement.height);

      if (imageData) {
        const code = jsQR(imageData.data, imageData.width, imageData.height);

        if (code) {
          console.log('QRCode Data:', code.data);
          props.onScan(code.data); // Update state with decoded data
          close();
        }
      };

      // Request the next animation frame
      requestAnimationFrame(scanQRCode);
    }

    // Start scanning
    scanQRCode();
  };

  const handleStartCamera = () => {
    setIsVideoVisible(true);
    // if (!videoRef.current) return;

    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        if (videoRef.current != null) {
          videoRef.current.srcObject = stream;
          // Start QR code scanning
          startQRCodeScanning();
        }
      })
      .catch((err) => {
        console.error('Error accessing webcam:', err);
      });
  };

  const close = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
      tracks.forEach(track => track.stop());
      setIsVideoVisible(false);
    }
  };

  useEffect(() => {
    return () => {
      close();
    };
  }, []);

  useEffect(() => {
    if (ref) {
      (ref as React.MutableRefObject<QRCodeReaderRef | null>).current = {
        close,
      };
    }
  }, [ref, close]);

  return (
    <div>
      {/* Button to start the camera */}
      <button onClick={handleStartCamera} className="text-blue-500">Start QR-code scanning</button>

      {/* Video element for webcam feed */}
      {isVideoVisible && (
      <video
        ref={videoRef}
        autoPlay
        playsInline
        style={{ width: '100%', height: 'auto' }}
      />
      )}
    </div>
  );
});

export default QRCodeReader;


