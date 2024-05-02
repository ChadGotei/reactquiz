function Main({children, status}) {
    return (
        <main className={status === 'ready' ? 'readyScreen' : 'main'}>
            {children}
        </main>
    )
}

export default Main
