import "./WeatherApp.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import AirSharpIcon from '@mui/icons-material/AirSharp';
import WbSunnySharpIcon from '@mui/icons-material/WbSunnySharp';
import CloudSharpIcon from '@mui/icons-material/CloudSharp';
import ThunderstormSharpIcon from '@mui/icons-material/ThunderstormSharp';
import ThermostatSharpIcon from '@mui/icons-material/ThermostatSharp';
import AcUnitRoundedIcon from '@mui/icons-material/AcUnitRounded';
import ChaletRoundedIcon from '@mui/icons-material/ChaletRounded';
import SevereColdRoundedIcon from '@mui/icons-material/SevereColdRounded';
import WaterDropSharpIcon from '@mui/icons-material/WaterDropSharp';
import UmbrellaSharpIcon from '@mui/icons-material/UmbrellaSharp';
import LensBlurSharpIcon from '@mui/icons-material/LensBlurSharp';
import MasksSharpIcon from '@mui/icons-material/MasksSharp';
import GradientSharpIcon from '@mui/icons-material/GradientSharp';
import MoreHorizSharpIcon from '@mui/icons-material/MoreHorizSharp';
import SentimentSatisfiedAltRoundedIcon from '@mui/icons-material/SentimentSatisfiedAltRounded';

export default function InfoBox ({info}) {
  return (
    <div className="infoBox">
        <Card sx={{ minWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img" 
                    height="200"
                    image={info.weather == "broken clouds" ? "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
                        : info.weather == "scattered clouds" ? "https://images.unsplash.com/photo-1642447733831-2cdd9f5efae7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2NhdHRlcmVkJTIwY2xvdWRzfGVufDB8fDB8fHww"
                        : info.weather == "few clouds" ? "https://images.unsplash.com/photo-1601297183305-6df142704ea2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2xlYXIlMjBza3l8ZW58MHx8MHx8fDA%3D" // "https://images.unsplash.com/photo-1571321654768-08cf7a1b343c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmV3JTIwY2xvdWRzfGVufDB8fDB8fHww"
                        : info.weather == "clouds" ? "https://plus.unsplash.com/premium_photo-1733317236155-b0e1a2930f37?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmV3JTIwY2xvdWRzfGVufDB8fDB8fHww"
                        : info.weather == "overcast clouds" ? "https://media.istockphoto.com/id/1325033552/photo/cloudscape.webp?a=1&b=1&s=612x612&w=0&k=20&c=E7vfDzaC5CJEqdMXkLrEoT7yZAQ5j1NUsXZDKNCS-sc="
                        : info.weather == "clear sky" ? "https://plus.unsplash.com/premium_photo-1727730047398-49766e915c1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xlYXIlMjBza3l8ZW58MHx8MHx8fDA%3D"
                        : info.weather == "thunderstorm" ? "https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGh1bmRlcnN0b3JtfGVufDB8fDB8fHww"
                        : info.weather == "rain" ? "https://images.unsplash.com/photo-1501691223387-dd0500403074?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFpbnxlbnwwfHwwfHx8MA%3D%3D"
                        : info.weather == "light rain" ? "https://images.unsplash.com/photo-1527766833261-b09c3163a791?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJhaW58ZW58MHx8MHx8fDA%3D"
                        : info.weather == "moderate rain" ? "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFpbnxlbnwwfHwwfHx8MA%3D%3D"
                        : info.weather == "drizzle" ? "https://images.unsplash.com/photo-1527766833261-b09c3163a791?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJpenpsZXxlbnwwfHwwfHx8MA%3D%3D"
                        : info.weather == "snow" ? "https://media.istockphoto.com/id/521998431/photo/whiteout-conditions.webp?a=1&b=1&s=612x612&w=0&k=20&c=Et5UJXNfxfqrOCYfhCervcMbsnTeNzn7HGse8LAKRsA="
                        : info.weather == "mist" ? "https://images.unsplash.com/photo-1485236715568-ddc5ee6ca227?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWlzdHxlbnwwfHwwfHx8MA%3D%3D"
                        : info.weather == "haze" ? "https://media.istockphoto.com/id/1089026982/photo/image-of-winter-fog-scene-in-delhi-with-india-gate-as-a-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=MQ6ONlYlQ75EzP0d9wX-VTcR_LtAjYXALooBxaCCNcs="
                        : info.weather == "smoke" ? "https://media.istockphoto.com/id/1163968623/photo/commuters-cars-drive-through-fog-on-city-street-at-twilight.webp?a=1&b=1&s=612x612&w=0&k=20&c=jZ-pm1LeQYJdRsrhW7mEaguTrmAwKE7k4Zo81r8_Qp4="
                        : info.weather == "fog" ? "https://images.unsplash.com/photo-1667242418072-64544fb7052f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZvZyUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
                        : "https://images.unsplash.com/photo-1705077296278-d82dd5c8662f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2VhdGhlciUyMGZvcmVjYXN0fGVufDB8fDB8fHww" }
                    alt="weather image" // https://images.unsplash.com/photo-1761100775470-d47410ad45b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG92ZXJjYXN0JTIwY2xvdWRzfGVufDB8fDB8fHww
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.cityName}
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span>
                            {info.temp > 40 ? <ThermostatSharpIcon />
                            : info.temp > 20 ? <SentimentSatisfiedAltRoundedIcon />
                            : info.temp < 20 ? <AcUnitRoundedIcon />
                            : info.temp < -8 ? <SevereColdRoundedIcon />
                            : <MoreHorizSharpIcon /> }
                            &nbsp;&nbsp;
                            {info.weather == "haze" ? <LensBlurSharpIcon />
                            : info.weather == "smoke" ? <LensBlurSharpIcon />
                            : info.weather == "fog" ? <LensBlurSharpIcon />
                            : info.weather == "clear sky" ? <WbSunnySharpIcon />
                            : info.weather == "thunderstorm" ? <ThunderstormSharpIcon />
                            : info.weather == ("rain" || "rainy") ? <UmbrellaSharpIcon />
                            : info.weather == "drizzle" ? <WaterDropSharpIcon />
                            : info.weather == "snow" ? <ChaletRoundedIcon />
                            : info.weather == "mist" ? <GradientSharpIcon />
                            : info.weather == "clouds" ? <CloudSharpIcon />
                            : info.weather == "few clouds" ? <CloudSharpIcon />
                            : info.weather == "scattered clouds" ? <CloudSharpIcon />
                            : info.weather == "broken clouds" ? <CloudSharpIcon />
                            : info.weather == "overcast clouds" && <CloudSharpIcon /> }
                            &nbsp;&nbsp;
                            {info.weather == "haze" && <MasksSharpIcon />}
                        </span>

                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                        <hr />
                        <p>Avg. Temperature :&nbsp; <b>{info.temp} °C</b></p>
                        <p>Feels Like :&nbsp; <b>{info.feelsLike} °C</b></p>
                        <p>Min Temperature :&nbsp; <b>{info.tempMin} °C</b></p>
                        <p>Max Temperature :&nbsp; <b>{info.tempMax} °C</b></p>
                        <p>Humidity :&nbsp; <b>{info.humidity}%</b></p>
                        <p>Weather :&nbsp; <b>{info.weather}</b></p>
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </div>
  )
}
