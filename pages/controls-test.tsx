import BikeControls from '../components/Controls'
import { Bike, SpeedLimit, PowerLevel } from '../lib/bike'
import { ApiContext, Api } from '../lib/api'
import { useEffect, useState } from 'react'

class FakeBike {
    id = '12345'
    mac = '1234'
    private speedLimit = SpeedLimit.EU
    private powerLevel = PowerLevel.Fourth

    async bikeFirmwareVersion() {
        return '1.1.1'
    }
    async bikeDistance() {
        return 100
    }

    async setSpeedLimit(l: SpeedLimit): Promise<SpeedLimit> {
        this.speedLimit = l
        return l
    }
    async getSpeedLimit(): Promise<SpeedLimit> {
        return this.speedLimit
    }

    async setPowerLvl(l: PowerLevel): Promise<PowerLevel> {
        this.powerLevel = l
        return l
    }
    async getPowerLvl(): Promise<PowerLevel> {
        return this.powerLevel
    }

    async playSound(id: number) {
        console.log('play sound:', id)
    }
}

export default function ControlsTest() {
    const fakeBike = new FakeBike as unknown as Bike
    const [api, setApi] = useState(new Api({
        token: 'dummy',
        refreshToken: 'dummy',
    }))

    useEffect(() => {
        try {
            const apiCredential = localStorage.getItem('vm-api-credentials')
            if (!apiCredential)
                throw 'api credentials not in local storage, if you login via the / page you should have them here also'

            const apiCredentials = JSON.parse(apiCredential)
            setApi(new Api(apiCredentials))
        } catch (e) {
            console.log('unable to parse api credentials from local storage, error:', e)
        }
    }, [])

    return (
        <div>
            <h1>Page for testing the bike controls</h1>
            <ApiContext.Provider value={api}>
                <BikeControls bike={fakeBike} disconnect={() => console.log('click disconnect')} />
            </ApiContext.Provider>

            <style jsx>{`
                div {
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                }
            `}</style>
        </div>
    )
}
