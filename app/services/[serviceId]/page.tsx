export default function Service({ params }: { params: { serviceId: string }}) {
    return (
        <div className="flex flex-col p-6">
            <p>{params.serviceId}</p>
        </div>
    );
}