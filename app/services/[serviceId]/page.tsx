export default function Service({ params }: { params: { serviceId: string }}) {
    return (
        <div>
            <p>{params.serviceId}</p>
        </div>
    );
}