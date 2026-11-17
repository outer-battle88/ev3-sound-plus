namespace ev3SoundPlusResources {
    //% fixedInstance jres=ev3soundplus.sound1
    export const sound1 = music.fromWAV(hex``);
}

namespace ev3SoundPlus {
    export enum CustomSound {
        //% block="Wheatley sp sabotage factoryhackone01"
        Sound1 = 0
    }

    //% blockId=ev3soundplus_play block="play custom sound %sound"
    //% blockNamespace=ev3SoundPlus weight=100 blockGap=8
    //% group="Playback"
    export function play(sound: CustomSound): void {
        switch (sound) {
            case CustomSound.Sound1:
                ev3SoundPlusResources.sound1.play();
                break;
        }
    }

    //% blockId=ev3soundplus_stop block="stop custom sound"
    //% blockNamespace=ev3SoundPlus weight=90
    //% group="Playback"
    export function stop(): void {
        music.stopAllSounds();
    }
}
