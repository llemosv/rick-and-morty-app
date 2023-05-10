import Image from '../../assets/not-found.png'

export function IconNothingFound(props: any) {
    return (
        <div className={props.className}>
            <img src={Image} alt="Not Found Logo" width="200" height="200" />
        </div>
    );
}

