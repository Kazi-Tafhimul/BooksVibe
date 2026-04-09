import React from 'react';
import { useRouteError, useNavigate } from 'react-router';

const ErrorPage = () => {
    const error = useRouteError();
    const navigate = useNavigate();

    return (
        <div style={styles.container}>
            {/* Background Circles */}
            <div style={styles.circle1}></div>
            <div style={styles.circle2}></div>

            {/* Content */}
            <div style={styles.content}>
                {/* Error Code */}
                <h1 style={styles.errorCode}>
                    4<span style={styles.zero}>0</span>4
                </h1>

                {/* Emoji */}
                <div style={styles.emoji}>😵</div>

                {/* Message */}
                <h2 style={styles.title}>Oops! Page Not Found</h2>
                <p style={styles.description}>
                    The page you're looking for doesn't exist or has been moved.
                </p>

                {/* Error Details */}
                {error && (
                    <p style={styles.errorDetail}>
                        <span style={styles.errorLabel}>Error: </span>
                        {error.statusText || error.message}
                    </p>
                )}

                {/* Buttons */}
                <div style={styles.buttonGroup}>
                    <button
                        style={styles.primaryButton}
                        onClick={() => navigate('/')}
                        onMouseEnter={(e) => {
                            e.target.style.transform = 'translateY(-3px)';
                            e.target.style.boxShadow = '0 10px 30px rgba(99, 102, 241, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = '0 4px 15px rgba(99, 102, 241, 0.3)';
                        }}
                    >
                        🏠 Go Home
                    </button>

                    <button
                        style={styles.secondaryButton}
                        onClick={() => navigate(-1)}
                        onMouseEnter={(e) => {
                            e.target.style.transform = 'translateY(-3px)';
                            e.target.style.backgroundColor = 'rgba(99, 102, 241, 0.1)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.backgroundColor = 'transparent';
                        }}
                    >
                        ← Go Back
                    </button>
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 50%, #16213e 100%)',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        position: 'relative',
        overflow: 'hidden',
    },
    circle1: {
        position: 'absolute',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15), transparent)',
        top: '-100px',
        right: '-100px',
    },
    circle2: {
        position: 'absolute',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(236, 72, 153, 0.15), transparent)',
        bottom: '-80px',
        left: '-80px',
    },
    content: {
        textAlign: 'center',
        zIndex: 1,
        padding: '40px',
    },
    errorCode: {
        fontSize: '150px',
        fontWeight: '900',
        color: '#ffffff',
        margin: '0',
        lineHeight: '1',
        textShadow: '0 0 40px rgba(99, 102, 241, 0.5)',
        letterSpacing: '-5px',
    },
    zero: {
        background: 'linear-gradient(135deg, #6366f1, #ec4899)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    },
    emoji: {
        fontSize: '60px',
        margin: '20px 0',
        animation: 'bounce 2s infinite',
    },
    title: {
        fontSize: '28px',
        color: '#e2e8f0',
        margin: '10px 0',
        fontWeight: '600',
    },
    description: {
        fontSize: '16px',
        color: '#94a3b8',
        margin: '10px 0 5px',
        maxWidth: '400px',
        lineHeight: '1.6',
    },
    errorDetail: {
        fontSize: '14px',
        color: '#f87171',
        backgroundColor: 'rgba(248, 113, 113, 0.1)',
        padding: '8px 16px',
        borderRadius: '8px',
        display: 'inline-block',
        margin: '15px 0',
        border: '1px solid rgba(248, 113, 113, 0.2)',
    },
    errorLabel: {
        fontWeight: '700',
    },
    buttonGroup: {
        display: 'flex',
        gap: '15px',
        justifyContent: 'center',
        marginTop: '30px',
        flexWrap: 'wrap',
    },
    primaryButton: {
        padding: '14px 32px',
        fontSize: '16px',
        fontWeight: '600',
        color: '#ffffff',
        background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
        border: 'none',
        borderRadius: '12px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        boxShadow: '0 4px 15px rgba(99, 102, 241, 0.3)',
    },
    secondaryButton: {
        padding: '14px 32px',
        fontSize: '16px',
        fontWeight: '600',
        color: '#6366f1',
        backgroundColor: 'transparent',
        border: '2px solid #6366f1',
        borderRadius: '12px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
    },
};

export default ErrorPage;