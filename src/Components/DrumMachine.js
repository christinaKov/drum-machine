import React, { useState } from 'react';
import DrumPad from './DrumPad';
import hihat808 from '../sounds/hihat-808.wav';
import hihatAcoustic from '../sounds/hihat-acoustic01.wav';
import kick808 from '../sounds/kick-808.wav';
import kickClassic from '../sounds/kick-classic.wav';
import kickHeavy from '../sounds/kick-heavy.wav';
import snare808 from '../sounds/snare-808.wav';
import snareAcoustic from '../sounds/snare-acoustic01.wav';
import snareVinyl from '../sounds/snare-vinyl02.wav';
import crash808 from '../sounds/crash-808.wav';

const DrumMachine = () => {
    const [audios] = useState([
        [hihat808, 'hihat808', 'Q'],
        [hihatAcoustic, 'hihat-acoustic', 'W'],
        [kick808, 'kick808', 'E'],
        [kickClassic, 'kick-classic', 'A'],
        [kickHeavy, 'kick-heavy', 'S'],
        [snare808, 'snare808', 'D'],
        [snareAcoustic, 'snare-acoustic', 'Z'],
        [snareVinyl, 'snare-vinyl', 'X'],
        [crash808, 'crash-808', 'C']
    ]);

    const [power, setPower] = useState(true);
    const [displayingText, setDisplayingText] = useState('');
    const [volume, setVolume] = useState(0.5);

    const togglePower = () => {
        setPower(!power);
        if (power) {
            setDisplayingText('Power is off');
        } else {
            setDisplayingText('Power is on')
        }
    }

    const volumeHandler = e => {
        setVolume(e.target.value);
        setDisplayingText(`Volume: ${Math.floor(e.target.value * 100)}`);
    }

    

    return (
        <div className="drum-machine">
            <div className="drum-pads" >
                {audios.map(audio => (
                    <DrumPad volume={volume} power={power} setDisplayingText={setDisplayingText} key={audio[1]} audio={audio[0]} audioName={audio[1]} note={audio[2]} />
                ))}
            </div>
            <div className="display">
                <div className="power-switch">
                    <p>Power</p>
                    <label className="switch">
                        <input onChange={togglePower} type="checkbox"/>
                        <span className="slider"></span>
                    </label>
                </div>
                <div className="audio-name">
                    <p>{displayingText}</p>
                </div>
                <div className="volume">
                    <input onChange={volumeHandler} className='volume-slider' type="range" step='0.01' min='0' max='1' value={volume} />
                </div>
            </div>
        </div>
    )
}

export default DrumMachine;